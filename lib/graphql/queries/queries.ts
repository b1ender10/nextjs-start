import gql from "graphql-tag";

export const GET_USERS = gql`
  query GetUsers {
    getUsers {
      id
      name
      email
      address {
        street
        city
        country
      }
    }
  }
`;

export const GET_ETHEREUM_NONCE = gql`
  query RequestEthereumNonce($address: String!) {
    requestEthereumNonce(
      address: $address
    ) 
  }
`

export const LOGIN_ETHEREUM = gql`
  mutation LoginEthereum($signature: String!, $address: String!) {
    loginEthereum(
      loginData: {
        signature: $signature
        address: $address
      }
    ) {
        accessToken
      }
  }
`

export const CREATE_ORDER = gql`
  mutation CreateOrder($company_name: String!, $tax_id: String!, $use_diadoc: Boolean!, $price: String!, $hiper_ledger: String!, $address: String!, $document_creator: String!, $telegram: String!, $email: String!, $position: String!, $operation_type: ORDER_OPERATION_TYPES!, $contact_number: String!, $files: [CreateOrderFileInput!]) {
    createOrder(
      input: {
        company_name: $company_name
        tax_id: $tax_id
        use_diadoc: $use_diadoc
        price: $price
        hiper_ledger: $hiper_ledger
        address: $address
        document_creator: $document_creator
        telegram: $telegram
        email: $email
        contact_number: $contact_number
        client_position: $position
        operation_type: $operation_type
        files: $files
      }
    ) {
      id
      company_name
      tax_id
      price
      hiper_ledger
      address
      document_creator
      telegram
      email
      contact_number
      wallet {
        id
        address
      }
      network
      operation_type
      draft_files {
        id  
        filename
        path
        file_hash
      }
    }
  }
`

export const GET_YIELD_TABLE = gql`
  query GetYieldTable($page: Int!, $pageSize: Int!) {
   getAccrualsProfitability( 
    sorting: { 
      field: "id", 
      direction: "DESC" 
    }, 
    paging: { 
      page: $page
      pageSize: $pageSize
    } 
    ) { 
      data { 
        id 
        date 
        total_accrued 
        profitability 
        total_issued 
      } 
      totalCount 
    } 
   }
`

export const GET_FILE_TOKEN = gql`
   query GenerateFileDownloadToken($id: Int!, $filenames: [String!]!, $uploaderType: UPLOADER_MODULES_TYPES!) {
    generateFileDownloadToken(
      id: $id,
      filenames: $filenames,
      uploaderType: $uploaderType,
    ) 
   }
`

export const SIGNED_CONTRACT_DATA = gql`
   mutation SignedContractPdfData($id: Int!, $hash: String!) {
    signedContractPdfData(
      id: $id,
      signatureHash: $hash,
    ) 
   }
`