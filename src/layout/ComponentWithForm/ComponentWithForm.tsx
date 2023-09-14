import { FC, ReactNode } from 'react'
import { Button } from '../../components/block/Button'
import styles from './ComponentWithForm.module.scss'
import { Link } from 'react-router-dom'
import arrowImg from '../../../public/images/arrow.svg'
import sedanImg from '../../../public/images/car-sedan-automobile.svg'

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
                            <img src={arrowImg} alt="" />
                        </Button>
                    </Link>
                    <h1 className={styles.h1}>
                        <img 
                            src={sedanImg}
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
