import clsx from "clsx"
import { FC } from "react"

import styles from "./styles.module.scss"
type LoaderProps = {
    isVisible: boolean,
    isSpinner?: boolean
    isFullPage?: boolean,
    className?: string
}
export const Loader: FC<LoaderProps> = ({ isVisible, isSpinner = true, isFullPage = true, className }) => {
    return (
        <div className={clsx(styles.wrapper, { [styles.hidden]: !isVisible }, {[styles.wrapper_inline]: !isFullPage}, className)}>
            <span className={clsx(styles.loader, {[styles.hidden]: !isSpinner})}></span>
        </div>
    )
}
