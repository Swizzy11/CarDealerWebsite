import React, { FC, ReactNode } from "react"
import styles from './Button.module.scss'

type ButtonProps = {
    type:  "button" | "submit" | "reset" | undefined,
    children?: ReactNode,
    classname: string,
    onClick?: () => void,
    isActive?: boolean
}

export const Button:FC<ButtonProps> = ({
    type,
    children,
    classname,
    onClick,
    isActive
}) => {
    return (
        <button 
            type={type} 
            className={styles[classname]}
            onClick={onClick}
            disabled={isActive}
        >
            {children}
        </button>
    )
}
