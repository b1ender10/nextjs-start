import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import clsx from "clsx"
import React, { ReactNode, useMemo, useState } from "react"
import { Controller, useFormContext } from "react-hook-form"
import { Icons } from "@/components/common"

import styles from "./styles.module.scss"

export const DropDown = DropdownMenuPrimitive.Root

export const DropDownTrigger = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger> & {
        label?: string
    }
>(({ className, children, ...props }, ref) => (
    <label className={styles.wrapper}>
        <DropdownMenuPrimitive.Trigger ref={ref} className={clsx(styles.trigger, className)} {...props} asChild>
            {children}
        </DropdownMenuPrimitive.Trigger>
    </label>
))
DropDownTrigger.displayName = DropdownMenuPrimitive.Trigger.displayName

export const DropDownContent = React.forwardRef<React.ElementRef<typeof DropdownMenuPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>>(
    ({ className, children, ...props }, ref) => (
        <DropdownMenuPrimitive.Portal>
            <DropdownMenuPrimitive.Content side={"bottom"} align={"center"} sideOffset={16} ref={ref} className={clsx(styles.content, className)} {...props}>
                {children}
            </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Portal>
    )
)
DropDownContent.displayName = DropdownMenuPrimitive.Content.displayName

export const DropDownItem = React.forwardRef<React.ElementRef<typeof DropdownMenuPrimitive.DropdownMenuItem>, React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.DropdownMenuItem>>(
    ({ className, children, ...props }, ref) => (
        <DropdownMenuPrimitive.DropdownMenuItem className={clsx(styles.item, className)}  ref={ref} {...props}>
            {children}
        </DropdownMenuPrimitive.DropdownMenuItem>
    )
)
DropDownItem.displayName = DropdownMenuPrimitive.DropdownMenuItem.displayName





export type DropdownFieldOption<T = string> = { label: ReactNode; value: T }

interface DropdownFieldProps {
    customChange?: (value: any) => void
    name: string
    options: any[]
    placeholder?: string
    label?: string
    getItem: (item: any) => ReactNode
    searchKey?: string
    isDisabled?: boolean
}

export const DropdownField: React.FC<DropdownFieldProps> = ({ customChange, name, placeholder, options, label, getItem, searchKey, isDisabled }) => {
    const tempKey = searchKey ? searchKey : "id"
    const { control, formState, watch } = useFormContext()
    const [open, setOpen] = useState<boolean>(false)
    const formError = (formState.errors[name]?.message as string)

    return (
        <>
        <Controller
            name={name}
            control={control}
            disabled={isDisabled}
            render={({ field }) => (
                <div className={styles.wrapper}>
                    <div className={styles.label}>{label || ""}</div>
                    <DropDown open={open} onOpenChange={!isDisabled ? setOpen : ()=>{}}>
                        <DropDownTrigger onClick={() => !isDisabled && setOpen(prev => !prev)}>
                            <div className={clsx(styles.trigger_field, formError && styles.trigger_field_error, isDisabled && styles.trigger_field_disabled)}>
                                {options?.find(option => option?.[tempKey] === field.value) ? getItem(options?.find(option => option?.[tempKey] === field.value)) : <span style={{color: "grey"}}>{placeholder}</span>}
                                <Icons.ArrowUp fill="Emerald-dark" className={`${open ? "" : styles.rotate}`} />
                            </div>
                        </DropDownTrigger>
                        <DropDownContent>
                            <div className={styles.options}>
                                {options.map(option => {
                                    const handleChange = () => {
                                        customChange ? customChange(option) : field.onChange(option?.[tempKey])
                                        setOpen(false)
                                    }

                                    return (
                                        <label className={option?.[tempKey] === field.value ? styles.selected : undefined} onClick={handleChange} key={option?.[tempKey]}>
                                            {getItem(option)}
                                        </label>
                                    )
                                })}
                            </div>
                        </DropDownContent>
                    </DropDown>
                </div>
            )}
        />

        {formError && (
            <span className={styles.error_text}>
                {formError}
            </span>
        )}

        </>
    )
}



