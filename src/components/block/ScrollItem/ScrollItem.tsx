import { FC } from 'react'
import styles from './ScrollItem.module.scss'

type ScrollItemProps = {
    imgURL: string,
    title: string,
    content: string
}
export const ScrollItem:FC<ScrollItemProps> = ({
    imgURL,
    title,
    content
}) => {
    return (
        <div className={styles.root}>
            <section className={styles.content}>
                <h1 className={styles.title}>
                    {title}
                </h1>
                    {content}
            </section>
            <img 
                src={imgURL} 
                className={styles.img} 
                alt="" 
            />
        </div>
    )
}
