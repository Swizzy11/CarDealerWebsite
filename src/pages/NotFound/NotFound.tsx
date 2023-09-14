import { Link } from 'react-router-dom'
import { Button } from '../../components/block/Button'
import styles from './NotFound.module.scss'

export const NotFound = () => {
    return (
        <div className={styles.root}>
            <h1>Not found</h1>
            <Button type='button' classname={'menu'}>
                <Link to={'/'}>
                    Go home
                </Link>
            </Button>
        </div>
    )
}
