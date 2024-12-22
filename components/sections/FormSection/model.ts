import { testLength, testPhoneNumber, testInn, testCheckBox, formValidationMessages, Locales, testBigNumberLength } from "@/lib";
import * as yup from "yup";

export type FormPayload = any;

export function createFormResolver(language: string | undefined) {

    const tempFieldMissing = language == Locales.RU ? formValidationMessages.fieldMissing.valueRu : formValidationMessages.fieldMissing.value;
    const tempIncorrectFormat = language == Locales.RU ? formValidationMessages.incorrectFormat.valueRu : formValidationMessages.incorrectFormat.value;
    
    const FormResolver = yup.object().shape({
        name: yup.string().required(tempFieldMissing).test(...testLength(0, 1000, language)),
        inn: yup.string().required(tempFieldMissing), //.test(...testInn(language)),
        address: yup.string().required(tempFieldMissing).test(...testLength(0, 1000, language)),
        hiper_ledger: yup.string().required(tempFieldMissing).test(...testLength(0, 1000, language)),
        creator: yup.string().required(tempFieldMissing).test(...testLength(0, 1000, language)),
        type: yup.string().required(tempFieldMissing).test(...testLength(0, 1000, language)),
        telegram: yup.string().required(tempFieldMissing).test(...testLength(0, 1000, language)),
        email: yup.string().email(tempIncorrectFormat).required(tempFieldMissing).test(...testLength(0, 1000, language)),
        amount: yup.string().required(tempFieldMissing).matches(/^\d+$/, tempIncorrectFormat), //.test(...testBigNumberLength(language)),
        phone: yup.string().required(tempFieldMissing).test(...testPhoneNumber(language)),
        data_reliability: yup.boolean().required(tempFieldMissing).test(...testCheckBox(language)),
        diadoc: yup.boolean().required(tempFieldMissing),
        position: yup.string().required(tempFieldMissing).test(...testLength(0, 1000, language)),
        transfer_confirm: yup.boolean(),
    });

    return FormResolver
}

export const defaultValues: FormPayload = {
    name: "",
    inn: "",
    address: "",
    hiper_ledger: "",
    creator: "",
    type: "",
    telegram: "",
    email: "",
    amount: "",
    phone: "",
    data_reliability: false,
    diadoc: false,
};
