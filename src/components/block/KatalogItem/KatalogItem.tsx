import { FC } from 'react'
import styles from './KatalogItem.module.scss'
import car from '../../../../public/images/ford-focus-st.jpeg'
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
            <img src={car} alt="" className={styles.img} />
            <h2 className={styles.title}>{title}</h2>
            <main className={styles.content}>{content}</main>
        </div>
    )
}
