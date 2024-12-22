import React from "react";
import styles from "./styles.module.scss";
import { useFormContext } from "react-hook-form";
import get from 'lodash.get';
import { Icons } from "@/components/common";

interface FormInputProps {
  label: string;
  placeholder?: string;
  type?: string;
  error?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
  className?: string
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  type = "text",
  error,
  value,
  onChange,
  isDisabled,
  className
}) => {
  const inputId = `${label?.toLowerCase()?.replace(/\s+/g, "-")}-input`;

  return (
    <div className={error ? styles.formGroupError : styles.formGroup}>
      <label htmlFor={inputId} className={styles.formLabel}>
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        className={`${styles.formInput} ${className} ${error ? styles.inputError : ""} ${isDisabled ? styles.formInput_disabled : ""}`}
        // className={error ? styles.inputError : styles.formInput}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        disabled={isDisabled}
      />
      {error && (
        <span id={`${inputId}-error`} className={styles.errorText}>
          {error}
        </span>
      )}
    </div>
  );
};

interface FormInputFieldProps {
  label: string;
  placeholder?: string;
  type?: string;
  name: string;
  customError?: string;
  isDisabled?: boolean;
  isPlaceHolderCurrency?: boolean;
}

export const FormInputField: React.FC<FormInputFieldProps> = ({
  label,
  placeholder,
  type = "text",
  name,
  customError,
  isDisabled,
  isPlaceHolderCurrency = false,
  ...props 
}) => {

  const { register, formState, setValue, watch, clearErrors } = useFormContext()

  const formError = customError || (get(formState.errors, name)?.message as string)

  const handleClear = () => {
      setValue(name, "")
  }

  const tempChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(name, e.target.value);
    clearErrors(name);
  }

  const inputId = `${label?.toLowerCase()?.replace(/\s+/g, "-")}-input`;

  return (
    <div className={styles.formGroup}>
      <label htmlFor={inputId} className={styles.formLabel}>
        {label}
      </label>
      <span className={styles.placeholder_wrapper}>
        <input
          id={inputId}
          type={type}
          className={`${styles.formInput} ${formError ? styles.inputError : ""} ${isDisabled ? styles.formInput_disabled : ""}`}
          placeholder={!isPlaceHolderCurrency ? placeholder : ""}
          value={watch(name)}
          onChange={tempChange}
          aria-invalid={!!formError}
          aria-describedby={formError ? `${inputId}-error` : undefined}
          disabled={isDisabled}
        />
        {isPlaceHolderCurrency && !watch(name)  && (
          <span className={styles.amount_placeholder}>
            {placeholder}
            <Icons.Currency />
          </span>
        )}
      </span>
      {formError && (
        <span id={`${inputId}-error`} className={styles.errorText}>
          {formError}
        </span>
      )}
    </div>
  );
};
