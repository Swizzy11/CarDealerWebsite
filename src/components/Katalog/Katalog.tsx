import { ReactNode, useEffect, useState } from 'react'
import { Button } from '../block/Button'
import { KatalogItem } from '../block/KatalogItem'
import styles from './Katalog.module.scss'
import { katalogDB } from '../../utils/db'

export const Katalog = () => {
    const [item, setItem] = useState(katalogDB)
    const onClick = () => {
       setItem(
        [...katalogDB
        ]
       )
    }

    return (
        <div className={styles.root}>
            <div className={styles.content}>
                { item.map((item, index) => {
                   return (
                        <KatalogItem 
                            imgURL={item.imgURL} 
                            title={item.title} 
                            content={item.content}                    
                            key={index} 
                        />)
                })
                }
            </div>
            <Button type={'button'} classname={'menu'} onClick={onClick}>Показать ещё</Button>
        </div>
    )
} 
