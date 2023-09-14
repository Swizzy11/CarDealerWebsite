import { FC, ReactNode } from 'react'
import { Button } from '../../components/block/Button'
import styles from './ComponentWithForm.module.scss'
import { Link } from 'react-router-dom'

type ComponentWithFormProps = {
    title: string,
    content: any,
    buttomGroup: ReactNode,
    photoURL: string
}

export const ComponentWithForm:FC<ComponentWithFormProps> = ({
    title,
    content,
    buttomGroup,
    photoURL
}) => {
    return (
        <div className={styles.root}>
                <form className={styles.form}>
                    <Link to={'/'} className={styles.btnBack}>
                        <Button type='button' classname='exit'>
                            <b>Главная</b>
                            <img src="../../../public/images/arrow.svg" alt="" />
                        </Button>
                    </Link>
                    <h1 className={styles.h1}>
                        <img 
                            src="../../../public/images/car-sedan-automobile.svg" 
                            alt="" 
                        />
                        {title}
                    </h1>
                    {content}
                    <div className={styles.group}>
                        {buttomGroup}
                    </div>
                </form>
                <span className={styles.photo}>
                    <img 
                        src={photoURL}
                        className={styles.img} 
                        alt=''
                    />
                </span>
        </div>
    )
}
