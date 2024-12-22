import { additionalValidationMessages, formValidationMessages, Locales } from "@/lib";

export const testInn = (language?: string | undefined) => {
    const func = (value: any) => {
        const stringValue = String(value)
        if (!stringValue || !Boolean(value)) return true
        const length = stringValue?.toString().length
        return !!length && (length === 10 || length === 12)
    }

    const error = language != Locales.RU ? additionalValidationMessages.innError.valueRu : additionalValidationMessages.innError.valueRu;

    return ["test_inn", error, func] as const;
}

export const testOgrn = (language?: string | undefined) => {
    const func = (value: string | null | undefined) => {
        const ogrnStr = String(value)
        if (!ogrnStr || !Boolean(value)) return true
        return ogrnStr.length === 13 || ogrnStr.length === 15
    }

    const error = language != Locales.RU ? additionalValidationMessages.ogrnError.value : additionalValidationMessages.ogrnError.valueRu;

    return ["test_ogrn", error, func] as const;
}

export const testLength = (min?: number, max?: number, language?: string | undefined) => {
    const func = (value: string | null | undefined) => {
        if (!value) return true
        return (min ? value.length >= min : true) && (max ? value.length <= max : true)  
    }

    const error = language != Locales.RU ? additionalValidationMessages.length.value(min, max) : additionalValidationMessages.length.valueRu(min, max);

    return ["test_length", error, func] as const;
}

export const testNumberLength = (min?: number, max?: number, language?: string | undefined) => {
    const func = (value: number) => {
        if (!value) return true
        return (min ? value >= min : true) && (max ? value <= max : true)  
    }

    const error = language != Locales.RU ? additionalValidationMessages.lengthNumber.value(min, max) : additionalValidationMessages.lengthNumber.valueRu(min, max);

    return ["test_number_length", error, func] as const;
}

export const testBigNumberLength = (language?: string | undefined) => {
    const func = (value: number | undefined) => {
        if (!value) return true
        return value >= 0 && value <= 1000000000000 // 1 trillion
    }

    const error = language != Locales.RU ? additionalValidationMessages.lengthBigNumber.value(0, 1) : additionalValidationMessages.lengthBigNumber.valueRu(0, 1);

    return ["test_number_length", error, func] as const;
}

export const testPhoneNumber = (language?: string | undefined) => {
    const func = (value: string | null | undefined) => {
        if (!value) return true
        // Add your phone number validation logic here
        // For example, you can use a regular expression to validate the format
        const cleanedValue = value.replace(/[\s()-]/g, '');
        const phoneNumberRegex = /^\+?[1-9]\d{1,14}$/;
        return phoneNumberRegex.test(cleanedValue);
    }

    const error = language != Locales.RU ? formValidationMessages.incorrectFormat.value : formValidationMessages.incorrectFormat.valueRu;

    return ["test_phone_number", error, func] as const;
}

export const testBik = (language?: string | undefined) => {
    const func = (value: string | null | undefined) => {
        if (!value) return true
        const bikRegex = /^[0-9]{9}$/;
        return bikRegex.test(value);
    }

    const error = language != Locales.RU ? formValidationMessages.incorrectFormat.value : formValidationMessages.incorrectFormat.valueRu;

    return ["test_bik", error, func] as const;
}

export const testAccount = (language?: string | undefined) => {
    const func = (value: string | null | undefined) => {
        if (!value) return true
        const checkingAccountRegex = /^[0-9]{20}$/;
        return checkingAccountRegex.test(value);
    }

    const error = language != Locales.RU ? formValidationMessages.incorrectFormat.value : formValidationMessages.incorrectFormat.valueRu;

    return ["test_account", error, func] as const;
}

export const testFio = (language?: string | undefined) => {
    const func = (value: string | null | undefined) => {
        // сказали убрать проверку
        // if (!value) return true
        // const fioRegex = /^([А-ЯЁ][а-яё]+\s){2}[А-ЯЁ][а-яё]+$/;
        // return fioRegex.test(value.trim());
        return true
    }

    const error = language != Locales.RU ? formValidationMessages.fioError.value : formValidationMessages.fioError.valueRu;

    return ["test_account", error, func] as const;
}

export const testCheckBox = (language?: string | undefined) => {
    const func = (value: boolean | undefined) => {
        return Boolean(value)
    }

    const error = language != Locales.RU ? formValidationMessages.checkboxError.valueRu : formValidationMessages.checkboxError.valueRu;

    return ["test_checkbox", error, func] as const;
}