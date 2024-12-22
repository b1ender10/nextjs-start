import React, { use, useEffect } from "react";
import styles from "./styles.module.scss";
import { Button, Checkbox, Icons, Loader } from "@/components/common";
import { ApplicationForm } from "@/components/sections";
import { ContentWrapper } from "@/components/layout";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useAppKit, useAppKitAccount, useAppKitNetwork } from "@reown/appkit/react";
import { FormProvider, set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { createFormResolver, defaultValues, FormPayload } from "./model";
import { useQuery, useMutation, gql, useLazyQuery } from "@apollo/client";
import {GET_USERS, CREATE_ORDER, LOGIN_ETHEREUM, GET_ETHEREUM_NONCE, GET_FILE_TOKEN, SIGNED_CONTRACT_DATA} from '@/lib/graphql/queries/queries';
import { useAccount, useReadContract, useSignMessage, useWriteContract } from "wagmi";
import { abiTransfer, ClaimContractAddress, formValidationMessages, Locales, numberToToken, shortenedAddress, TargetTransferAddress, tokensToNumber, TransferContractAddress } from "@/lib";
import { useRouter } from "next/router";
import { api } from "@/lib/api/index";
import toast from "react-hot-toast";
// import { toast } from "react-toastify";


const wrapperStyles = {
  background: "var(--Light-green, #f9fffd)"
}

export const FormSection: React.FC = () => {
  const router = useRouter();
  const FormResolver1 = createFormResolver(router.locale);
  const form = useForm<FormPayload>({
      mode: "onBlur",
      resolver: yupResolver(FormResolver1),
      defaultValues: defaultValues
  });

  const { open, close } = useAppKit();
  const { address, isConnected: isConnectedReown, caipAddress, status } = useAppKitAccount();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { caipNetwork, caipNetworkId, chainId, switchNetwork } = useAppKitNetwork();
  const [ loginEthereum ] = useMutation(LOGIN_ETHEREUM);
  const [ createOrder ] = useMutation(CREATE_ORDER);
  const [ signContract ] = useMutation(SIGNED_CONTRACT_DATA);
  const [ applicationState, setApplicationState ] = React.useState("none");
  const [ currentOrder, setCurrentOrder ] = React.useState<any>(null);
  const [ currentFile, setCurrentFile ] = React.useState<any>(null);
  const [ currentFileSignature, setCurrentFileSignature ] = React.useState<any>(null);
  const { writeContractAsync } = useWriteContract();
  const [ isLoading, setIsLoading ] = React.useState(false);

  const { refetch: refetchTextToSign } = useQuery(GET_ETHEREUM_NONCE, {variables: {address: address}, skip: true});
  const { refetch: refetchGetFileToken, } = useQuery(GET_FILE_TOKEN, {skip: true});
  const [ getFileToken, { loading, error, data } ] = useLazyQuery(GET_FILE_TOKEN);

   const { data: balance } = useReadContract({
      address: TransferContractAddress,
      abi: abiTransfer,
      functionName: 'balanceOf',
      args: [address],
  });

  const tempCreateOrder = async () => {
    try{
      setIsLoading(true);
      const {data : {requestEthereumNonce : textToSign}} = await refetchTextToSign();
      const signatureRes = await signMessageAsync({ message: textToSign});
      const { data: accessTokenData } = await loginEthereum({
        variables: {
          signature: signatureRes,
          address: address
        }
      });
      localStorage.setItem('token', accessTokenData?.loginEthereum?.accessToken);

      const formData = form.getValues();

      const { data, errors } = await createOrder({
        variables: {
          company_name: formData.name,
          tax_id: String(formData.inn),
          use_diadoc: formData.diadoc,
          price: String(formData.amount),
          hiper_ledger: String(formData.hiper_ledger), 
          address: formData.address,
          document_creator: formData.creator,
          telegram: formData.telegram,
          email: formData.email,
          contact_number: formData.phone,
          position: formData.position,
          operation_type: formData.type,
          files: [],
        },
      });
      // setApplicationState(errors ? "error" : "success");
      setCurrentOrder(data?.createOrder);
      setIsLoading(false);
    } catch(e) {
      console.error(e);
      setApplicationState("error");
      toast.error(router.locale == Locales.RU ? formValidationMessages.somethingWrongError.valueRu : formValidationMessages.somethingWrongError.value);
      setIsLoading(false);
    }
  }

  const tempDownloadFile = async () => {
    try {
      setIsLoading(true);
      const {data: fileToken} = await getFileToken({variables: {id: currentOrder?.id, filenames: [currentOrder?.draft_files?.[0]?.filename], uploaderType: "ORDER_DRAFT"}});
      console.log("Authorize:" , fileToken?.generateFileDownloadToken);
      const token = localStorage.getItem('token');
  
      const baseUrl = "https://api.rt.radianceteam.com";
      const url = baseUrl + `/protected-download?token=${fileToken?.generateFileDownloadToken}`;
  
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Error fetching file: ${response.statusText}`);
      }
  
      const blob = await response.blob();
  
      const urlBlob = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = urlBlob;
  
      link.download = "downloaded-file.pdf";
  
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>", link.download)
  
      document.body.appendChild(link);
  
      link.click();
  
      link.remove();
      window.URL.revokeObjectURL(urlBlob);
  
      // const resPost = await api.orders.getFile({token: fileToken?.generateFileDownloadToken});
      // console.log("ResPost: ", resPost);
      // const blob = new Blob([resPost?.data], { type: 'application/pdf'});
      //   // { type: resPost.headers['content-type'] });
      // const url = window.URL.createObjectURL(blob);
      // const a = document.createElement('a');
      // a.href = url;
      // a.download = currentOrder?.draft_files?.[0]?.filename || 'document.doc';
      // document.body.appendChild(a);
      // a.click();
      // window.URL.revokeObjectURL(url);
      // a.remove();
  
      setCurrentFile(blob);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
      toast.error(router.locale == Locales.RU ? formValidationMessages.somethingWrongError.valueRu : formValidationMessages.somethingWrongError.value);
      setIsLoading(false);
    }
   
  }

  const tempSignFile = async () => {
    try {
      setIsLoading(true);
      console.log(currentOrder, currentOrder?.draft_files?.[0]?.file_hash)
      const currentFileMockHash = currentOrder?.draft_files?.[0]?.file_hash;
      const signatureRes = await signMessageAsync({ message: currentFileMockHash ? currentFileMockHash : ""});
      // const signatureRes = await signMessageAsync({ message: currentFile});
      console.log(signatureRes);
      setCurrentFileSignature(signatureRes);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
      setCurrentFileSignature(null);
      toast.error(router.locale == Locales.RU ? formValidationMessages.somethingWrongError.valueRu : formValidationMessages.somethingWrongError.value);
      setIsLoading(false);
    }
  }

  const tempTransfer = async () => {
    try {
      if(!form.getValues().transfer_confirm) {
        form.setError("transfer_confirm", { message: router.locale == Locales.RU ? formValidationMessages.confirmTransfer.valueRu : formValidationMessages.confirmTransfer.value});
        return;
      }
      setIsLoading(true);
      const {data} = await signContract({variables: {id: currentOrder?.id, hash: currentFileSignature}});
      console.log(data);

      console.log(Number(form.getValues().amount))
      const res = await writeContractAsync({ 
        address: TransferContractAddress,
        abi: abiTransfer,
        functionName: 'transfer',
        args: [data?.signedContractPdfData, numberToToken(Number(form.getValues().amount))],
      });
      console.log(res);

      setApplicationState("success");
      setIsLoading(false);
    } catch (e) {
      console.error(e);
      setApplicationState("error");
      toast.error(router.locale == Locales.RU ? formValidationMessages.somethingWrongError.valueRu : formValidationMessages.somethingWrongError.value);
      setIsLoading(false);
    }
  }

  const getCurrentStep = () => {
    if (!isConnectedReown) return 1;
    if (isConnectedReown && !currentOrder) return 2;
    if (isConnectedReown && currentOrder && !currentFile) return 3;
    if (currentFile && !currentFileSignature) return 4; 
    if (currentFileSignature) return 5;
    return 1;
  }



  // useEffect(() => {console.log(form.formState.errors)}, [form.formState]);
  // useEffect(() => {console.log(currentOrder)}, [currentOrder]);
  // useEffect(() => {console.log(form.watch("network"))}, [form.watch("network")]);

  useEffect(() => {
    if(tokensToNumber(balance)  < form.watch("amount")) {
      form.setError("amount", {message: router.locale == Locales.RU ? formValidationMessages.insufficientFunds.valueRu : formValidationMessages.insufficientFunds.value});
    }
  }, [form.watch("amount")]);

  useEffect(() => {
    form.setValue("wallet", address);
    form.setValue("network", caipNetwork?.name);
  }, [isConnected, address, caipNetwork]);
  
  if(applicationState === "success") {
    return (
      <ContentWrapper customStyles={wrapperStyles}>
        <div className={styles.done_wrapper}>
          Done
        </div>
      </ContentWrapper>
    )
  }

  if(applicationState === "error") {
    return (
      <ContentWrapper customStyles={wrapperStyles}>
        <div className={styles.done_wrapper}>
          Error
        </div>
      </ContentWrapper>
    )
  }

  return (
    <ContentWrapper customStyles={wrapperStyles}>
      <div className={styles.formPage}>
        <div className={styles.formWrapper}>
          <header className={styles.formHeader}>
            <div className={styles.headerContent}>
            </div>
            <p className={styles.headerDescription}>
            </p>

          </header>

          <FormProvider {...form}>
            <form className={styles.mainForm}>
              <ApplicationForm isDisabled={!!currentOrder} currentStep={currentFileSignature ? "transfer" : currentOrder ? "created" : isConnected ? "connected" : "disconnected"} />

              <div className={styles.formActions}>
                {isLoading ? 
                <Loader className={styles.formActions_loader} isVisible isFullPage={false} /> :
                isConnectedReown ? 
                <>
                  {/* <div className={styles.networkSelection}> */}
                    {/* <WalletInfo type="short" />  */}
                  {/* </div> */}
                  {!currentOrder && <Button variant={form.watch("data_reliability") ? "primary" : "secondary"} onClick={form.handleSubmit(tempCreateOrder)}>2. send</Button>}
                  {currentFile && !currentFileSignature && <Button variant="primary" onClick={tempSignFile}>4. send</Button>}
                  {currentFileSignature && <Button variant={form.getValues().transfer_confirm ? "primary" : "secondary"} onClick={tempTransfer}>5. send</Button>}

                  {currentOrder && !currentFile && 
                    <div className={styles.contract} onClick={tempDownloadFile}>
                      <Button className={styles.contract_download} variant="primary">
                        3. download
                        <Icons.Download fill="White" />
                      </Button>
                      <div className={styles.contract_nameWrapper}>
                      </div>
                    </div>
                  }
                </> : 
                <Button variant="primary" onClick={() => open()}>1. connect</Button>
                }
              </div>
            </form>
          </FormProvider>
          
        </div>
      </div>
    </ContentWrapper>
  );
};

