import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import styles from "./styles.module.scss";
import { useFormContext } from "react-hook-form";

interface CheckboxProps {
    children: React.ReactNode;
}

export const Checkbox: React.FC<CheckboxProps> = ({children}) => (
    <div style={{ display: "flex", alignItems: "center" }}>
        <CheckboxPrimitive.Root className={styles.CheckboxRoot} defaultChecked id="c1">
            <CheckboxPrimitive.Indicator className={styles.CheckboxIndicator}>
                <CheckIcon />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        <label className={styles.Label} htmlFor="c1">
            {children}
        </label>
    </div>
);

interface CheckboxFieldProps {
    name: string
    children: React.ReactNode;
    isDisabled?: boolean;
}

export const CheckboxField: React.FC<CheckboxFieldProps> = ({children, name, isDisabled }) => {
    const { control, formState, watch, setValue, setError, clearErrors } = useFormContext();
    const formError = (formState.errors[name]?.message as string);

    const tempChange = (checked: boolean) => {
        setValue(name, checked);
        clearErrors(name);
    }

    return (
        <>
            <div style={{ display: "flex", alignItems: "center" }}>
                <CheckboxPrimitive.Root disabled={isDisabled} onCheckedChange={tempChange} checked={Boolean(watch(name))} className={`${styles.CheckboxRoot} ${isDisabled && styles.CheckboxRoot_disabled}`} defaultChecked id="c1">
                    <CheckboxPrimitive.Indicator className={styles.CheckboxIndicator}>
                        <CheckIcon />
                    </CheckboxPrimitive.Indicator>
                </CheckboxPrimitive.Root>
                <label className={styles.Label} 
                // htmlFor="c1"
                >
                    {children}
                </label>
            </div>
            {formError && <span className="error">{formError}</span>}
        </>
    )
};
