import React, { FC, ReactNode } from "react"
import styles from './Button.module.scss'

type ButtonProps = {
    children?: ReactNode,
    classname: string,
    onClick?: () => void,
    isActive?: boolean
}

export const Button:FC<ButtonProps> = ({
    children,
    classname,
    onClick,
    isActive
}) => {
    return (
        <button 
            type="button" 
            className={styles[classname]}
            onClick={onClick}
            disabled={isActive}
        >
            {children}
        </button>
    )
}
