import { FC, ReactNode } from 'react'
import styles from './Modal.module.scss'
import { Button } from '../Button'

type ModalProps = {
    content?: string | number | ReactNode,
    title: string,
    onClick: () => void
}

export const Modal:FC<ModalProps> = ({
    content,
    title,
    onClick
}) => {
    return (
        <div className={styles.root}>
            <div className={styles.modal}>
                <header className={styles.header}>
                    <b>{title}</b>
                    <Button onClick={onClick} classname={'exit'}>X</Button>
                </header>
                <section className={styles.content}>
                    {content}
                </section>
            </div>
        </div>
    )
}
