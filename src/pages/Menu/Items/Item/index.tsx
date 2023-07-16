import styles from './Item.module.scss'
import { DisheTags } from 'components/DisheTags'
import { Dishe } from 'types/Dishe'
import { useNavigate } from 'react-router-dom'


export function Item(props: Dishe) {
  const { id, title, description, photo } = props
  const navigate = useNavigate()

  return (
    <div className={styles.item} onClick={() => navigate(`/prato/${id}`)}>
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