import { Link } from 'react-router-dom'
import { Button } from '../../components/block/Button'
import { Input } from '../../components/block/Input'
import { ComponentWithForm } from '../../layout/ComponentWithForm'
import styles from './Registration.module.scss'
import { Line } from '../../components/Line'
import { BestCarInscription } from '../../components/BestCarInscription'
import { BackgroundAnimation } from '../../components/BackgroundAnimation'
import FordFocus from '../../../public/images/ford-focus-st.jpeg'

export const Registration = () => {
    return (
        <div className={styles.root}>
            <Line />
            <div className={styles.content}>
                <BestCarInscription />
                <ComponentWithForm 
                    title={'Регистрация'}
                    content={
                        <>
                            <Input
                                classname='login'
                                type='text'
                                textLabel='Логин' 
                            />
                            <Input
                                classname='login'
                                type='email'
                                textLabel='Почта' 
                            />
                            <Input
                                classname='login'
                                type='password'
                                textLabel='Пароль' 
                            />
                            <Input
                                classname='login'
                                type='tel'
                                textLabel='Номер Телефона' 
                            />
                        </>
                    }
                    buttomGroup={
                        <>
                            <Button
                                type='submit'
                                classname='forComponentWithForm'
                            >
                                Зарегистрироваться
                            </Button>
                            <Link to={'/login'}>
                                <Button
                                    type='button'
                                    classname='forComponentWithForm'
                                >
                                    Есть аккаунт?
                                </Button>
                            </Link>
                        </>
                    } 
                    photoURL={FordFocus} 
                />
                </div>
                <BackgroundAnimation />
        </div>
    )
}
