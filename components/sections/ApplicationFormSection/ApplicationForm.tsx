import { useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { RootState } from "@/store";
import { Checkbox, DropDown, DropDownContent, DropDownItem, DropDownTrigger, FormInput, Icons, WalletInfo } from "@/components/common";
import { useState } from "react";
import { DropdownField } from "@/components/common/DropDown/DropDown";
import { CheckboxField } from "@/components/common/Checkbox/Checkbox";
import { Locales, NetworkOptions, TypeOptions } from "@/lib";
import { useRouter } from "next/router";
import { FormInputField } from "@/components/common";
import { useAppKitAccount, useAppKitNetwork } from "@reown/appkit/react";


interface ApplicationFormProps {
    isDisabled?: boolean;
    currentStep?: string;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({isDisabled, currentStep}) => {
    const router = useRouter();
    const { caipNetwork } = useAppKitNetwork();
    const { address } = useAppKitAccount();


    return (
        <>
            <FormInputField
                name="name"
                label="{bridgeData?.FormSectionNameLabel}"
                placeholder="{bridgeData?.FormSectionNamePlaceholder}"
                isDisabled={isDisabled}
            />
            <FormInputField
                name="inn"
                label="{bridgeData?.FormSectionInnLabel}"
                placeholder="{bridgeData?.FormSectionInnPlaceholder}"
                isDisabled={isDisabled}
            />
            <FormInputField
                name="address"
                label="{bridgeData?.FormSectionAddressLabel}"
                placeholder="{bridgeData?.FormSectionAddressPlaceholder}"
                isDisabled={isDisabled}
            />

            <div className={styles.formGrid}>
                <div className={styles.formRow}>
                    <FormInputField
                        name="position"
                        label="{bridgeData?.FormSectionPositionLabel}"
                        placeholder="{bridgeData?.FormSectionPositionPlaceholder}"
                        isDisabled={isDisabled}
                    />
                    <FormInputField
                        name="creator"
                        label="{bridgeData?.FormSectionFullNameLabel}"
                        placeholder="{bridgeData?.FormSectionFullNamePlaceholder}"
                        isDisabled={isDisabled}
                    />
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <DropdownField isDisabled={isDisabled} label="{bridgeData?.FormSectionTypeLabel}" placeholder="{bridgeData?.FormSectionTypePlaceholder}" name="type" options={TypeOptions} getItem={(el) => router.locale == Locales.RU ? el.labelRu : el.label} searchKey="value" />
                    </div>
                    <FormInputField
                        name="hiper_ledger"
                        label="{bridgeData?.FormSectionHyperledgerLabel}"
                        placeholder="{bridgeData?.FormSectionHyperledgerPlaceholder}"
                        isDisabled={isDisabled}
                    />
                </div>

                <div className={styles.formRow}>
                    <FormInput 
                        isDisabled={true}
                        label="{bridgeData?.FormContragentNetworkLabel}  "
                        placeholder="{bridgeData?.FormContragentNetworkPlaceholder} "
                        value={caipNetwork?.name} 
                    />
                    <FormInput 
                        label="{bridgeData?.FormContragentWalletLabel}"
                        placeholder="{bridgeData?.FormContragentWalletPlaceholder}"
                        isDisabled={true} 
                        value={address}
                        className={styles.input_address}
                    />
                </div>

                <div className={styles.formRow}>
                    <FormInputField 
                        name="telegram"
                        label="{bridgeData?.FormSectionTelegramLabel} "
                        placeholder="{bridgeData?.FormSectionTelegramPlaceholder}"
                        isDisabled={isDisabled}
                    />
                    <FormInputField
                        name="email"
                        label="{bridgeData?.FormSectionaEmailLabel}"
                        type="email"
                        placeholder="{bridgeData?.FormSectionaEmailPlaceholder}"
                        isDisabled={isDisabled}
                    />
                </div>

                <div className={styles.formRow}>
                    <div className={styles.amount_wrapper}>
                        <FormInputField 
                            name="amount" 
                            label="{bridgeData?.FormSectionaAmountLabel} "
                            placeholder="{bridgeData?.FormSectionaAmountPlaceholder}"
                            isPlaceHolderCurrency
                            isDisabled={isDisabled}
                        />
                        {/* <WalletInfo className={styles.amount_wrapper_wallet} type="short" />  */}
                    </div>
                    <FormInputField
                        name="phone"
                        label="{bridgeData?.FormSectionaPhoneLabel} "
                        placeholder="{bridgeData?.FormSectionaPhonePlaceholder} "
                        isDisabled={isDisabled}
                    />
                </div>
            </div>

            <div className={styles.formGroup}>
                {currentStep == "connected" &&
                    <CheckboxField name="data_reliability" isDisabled={isDisabled}>
                        test
                    </CheckboxField>
                }
            </div>
            {currentStep == "connected" &&
                <CheckboxField name="diadoc" isDisabled={isDisabled}>
                    test
                </CheckboxField>
            }

            {currentStep == "transfer" &&
                <CheckboxField name="transfer_confirm">
                    test
                </CheckboxField>
            }
        </>
    )
}