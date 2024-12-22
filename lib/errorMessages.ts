export const formValidationMessages = {
    incorrectFormat: {value: "Incorrect format", valueRu: "Неправильный формат"},
    fieldMissing: {value: "Field is missing", valueRu: "Заполните поле"},
    maxLength: {value: "Exceeded character limit", valueRu: "Превышен лимит символов"},
    incorrectLength: {value: "Incorrect character limit", valueRu: "Неверный лимит символов"},
    fioError: {value: "Correct to surname, name, and patronymic", valueRu: "Исправьте на фамилию, имя и отчество"},
    checkboxError: {value: "Confirm consent", valueRu: "Подтвердите согласие"},
    somethingWrongError: {value: "Something went wrong, please try again", valueRu: "Что-то пошло не так, попробуйте еще раз"},
    confirmTransfer: {value: "Confirm the transfer", valueRu: "Подтвердите перевод"},
    insufficientFunds: {value: "Insufficient funds on balance", valueRu: "Недостаточно средств на балансе"}
}

export const additionalValidationMessages = {
    innError: {value: `${formValidationMessages.incorrectFormat.value}. The TIN must contain 10 or 12 digits`, valueRu: `${formValidationMessages.incorrectFormat.valueRu}. ИНН должен содержать 10 или 12 цифр`}, 
    ogrnError: {value: `${formValidationMessages.incorrectFormat.value}. OGRN must contain 13 or 15 digits`, valueRu: `${formValidationMessages.incorrectFormat.valueRu}. ОГРН должен содержать 13 или 15 цифр`},
    length: {value: (min?: number, max?: number) => `${formValidationMessages.incorrectLength.value}. ${min ? `Min: ${min}` : ""} ${max ? `Max: ${max}` : ""}`, valueRu: (min?: number, max?: number) => `${formValidationMessages.incorrectLength.valueRu}. ${min ? `Мин: ${min}` : ""} ${max ? `Макс: ${max}` : ""}`},
    lengthNumber: {value: (min?: number, max?: number) => `${min ? `Min: ${min}` : ""} ${max ? `Max: ${max}` : ""}`, valueRu: (min?: number, max?: number) => `${min ? `Мин: ${min}` : ""} ${max ? `Макс: ${max}` : ""}`},
    lengthBigNumber: {value: (min?: number, max?: number) => `${min ? `Min: ${min}` : ""} ${max ? `Max: ${max} trillion` : ""}`, valueRu: (min?: number, max?: number) => `${min ? `Мин: ${min}` : ""} ${max ? `Макс: ${max} трлн.` : ""}`},
}