import styles from './Item.module.scss'
import { DisheTags } from 'components/DisheTags'
import { Dishe } from 'types/Dishe'


export function Item(props: Dishe) {
  const { title, description, photo } = props

  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        <DisheTags {...props}/>
      </div>
    </div >
  )
}