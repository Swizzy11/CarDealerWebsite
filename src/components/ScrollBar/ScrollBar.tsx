import { useEffect, useState } from 'react'
import { Button } from '../block/Button'
import { ScrollItem } from '../block/ScrollItem'
import styles from './ScrollBar.module.scss'
import { ScrolingItem } from '../../utils/ScrolingItem'
import { cardsDB } from '../../utils/db'

export const ScrollBar = () => {
    const [itemID, setItemID] = useState(0);
    const scrollingItem = new ScrolingItem(itemID, setItemID)
    
    useEffect(() => {
        scrollingItem.onStart()
    }, [])    
  

    return (
        <div className={styles.root}>
            {   
            <ScrollItem 
                imgURL={cardsDB[itemID].imgURL} 
                title={cardsDB[itemID].title} 
                content={cardsDB[itemID].content} 
            />
                
            }
            <div className={styles.buttonGroup}>
                <Button 
                    type={'button'} 
                    classname={'flatButton'} 
                    onClick={() => {
                        setItemID(0)
                    }}
                />
                <Button 
                    type={'button'} 
                    classname={'flatButton'} 
                    onClick={() => {
                        setItemID(1)
                    }}
                />
                <Button 
                    type={'button'} 
                    classname={'flatButton'} 
                    onClick={() => {
                        setItemID(2)
                    }}
                />
            </div>
        </div>
    )
}
