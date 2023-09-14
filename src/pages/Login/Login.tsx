import { Link } from 'react-router-dom'
import { Button } from '../../components/block/Button'
import { Input } from '../../components/block/Input'
import { Line } from '../../components/Line'
import { ComponentWithForm } from '../../layout/ComponentWithForm'
import styles from './Login.module.scss'
import { BestCarInscription } from '../../components/BestCarInscription'
import { BackgroundAnimation } from '../../components/BackgroundAnimation'
import FordFocus from '../../../public/images/ford-focus-st.jpeg'

export const Login = () => {

    return (
        <div className={styles.root}>
            <Line />
            <div className={styles.content}>
                <BestCarInscription />
                <ComponentWithForm 
                    title={'Авторизация'}
                    content={<>
                        <Input
                            classname='login'
                            type='text'
                            textLabel='Логин' />
                        <Input
                            classname='login'
                            type='password'
                            textLabel='Пароль' />
                    </>}
                    buttomGroup={
                    <>
                        <Button
                            type='submit'
                            classname='forComponentWithForm'
                        >
                            Авторизоваться
                        </Button>
                        <Link to={'/registration'}>
                            <Button
                                type='button'
                                classname='forComponentWithForm'
                            >
                                Нет аккаунта?
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
