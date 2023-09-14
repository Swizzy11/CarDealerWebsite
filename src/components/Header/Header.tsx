import { Link } from 'react-router-dom'
import { Button } from '../block/Button'
import styles from './Header.module.scss'

export const Header = () => {
    const isLogin = false;

    return (
        <div className={styles.root}>
            <b>
                <span data-text="AutoDealer">AutoDealer</span>
            </b>
            <Link to={
                (isLogin) ? 'profile' : 'login'
            }>
                <Button type='button' classname={'btnImage'} />
            </Link>
        </div>
        
    )
}
