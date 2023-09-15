import { BackgroundAnimation } from '../../components/BackgroundAnimation'
import { Header } from '../../components/Header'
import { Katalog } from '../../components/Katalog'
import { Line } from '../../components/Line'
import { ScrollBar } from '../../components/ScrollBar'
import styles from './Home.module.scss'


export const Home = () => {
    return (
        <div className={styles.root}>
            <header className={styles.header}>
                <Header />
            </header>
            <main className={styles.main}>
                <ScrollBar /> 
                <span className={styles.katalogTitle}>Католог</span>
                <Katalog />
            </main>
            <footer className={styles.footer}>

            </footer>
        </div>
    )
}
