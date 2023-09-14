import { FC } from 'react'
import styles from './KatalogItem.module.scss'

type KatalogItemProps = {
    imgURL: string,
    title: string,
    content: string
}

export const KatalogItem:FC<KatalogItemProps> = ({
    imgURL,
    title,
    content
}) => {
    return (
        <div className={styles.root}>
            <img src={'../../../../public/images/ford-focus-st.jpeg'} alt="" className={styles.img} />
            <h2 className={styles.title}>{title}</h2>
            <main className={styles.content}>{content}</main>
        </div>
    )
}
