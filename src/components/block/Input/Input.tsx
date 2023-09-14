import { FC, InputHTMLAttributes } from "react"
import styles from './Input.module.scss'

type InputProps = {
    type: string,
    classname: string,
    textLabel: string
}

export const Input:FC<InputProps> = ({
    type,
    classname,
    textLabel
}) => {
    return (
        <div className={styles.group}>         
            <input
                className={styles[classname]}
                type={type}
                required 
            />
            <span className={styles.highlight}></span>
            <label htmlFor={styles[classname]} className={styles.label}>
                {textLabel}
            </label>
        </div>
    )
}
