import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import styles from './NotFound.module.scss'

export const NotFound = () => {
    return (
        <div className={styles.root}>
            <h1>Not found</h1>
            <Button classname={'menu'}>
                <Link to={'/start'}>
                    Menu
                </Link>
            </Button>
        </div>
    )
}
