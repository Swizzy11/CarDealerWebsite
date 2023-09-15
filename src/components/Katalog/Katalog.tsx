import { ReactNode, useEffect, useState } from 'react'
import { Button } from '../block/Button'
import { KatalogItem } from '../block/KatalogItem'
import styles from './Katalog.module.scss'
import { katalogDB } from '../../utils/db'
import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux'
import { fethCars } from '../../store/reducers/ActionCreators'
import { Loader } from '../Loader'
import { ICar } from '../../utils/models/ICar'

export const Katalog = () => {
    const dispatch = useAppDispatch()
    const {cars, isLoading, error} = useAppSelector(state => state.car)
    const [item, setItem] = useState<ICar[]>(cars);

    useEffect( () => {
        dispatch(fethCars());
        if(!isLoading) {
            setItem([
                ...cars
               ])
        }
    }, [])
    useEffect( () => {
        if(!isLoading) {
            setItem([
                ...cars
               ])
        }
    }, [isLoading])

    const onClick = () => {
       setItem([
        ...item,
        ...cars
       ])
    }

    return (
        <div className={styles.root}>
                { (isLoading) 
                    ? <div className={styles.loader} >
                        <Loader />
                      </div> 
                    : <>
                        <div className={styles.content}>
                            {item.map((item, index) => {
                                return (
                                    <KatalogItem
                                        imgURL={item.imgURL}
                                        title={item.carBrand}
                                        content={item.model}
                                        key={index} />)
                            })}
                        </div>
                        <Button 
                            type={'button'} 
                            classname={'menu'} 
                            onClick={onClick}
                        >
                            Показать следующие
                        </Button>
                    </>
                }
                {error && <h2>{error}</h2>}
        </div>
    )
} 
