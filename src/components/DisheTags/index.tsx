import classNames from 'classnames'
import styles from './DishTags.module.scss'
import { Dishe } from 'types/Dishe'

export function DisheTags({ category, size, serving, price} : Dishe) {
  return (
    <div className={styles.tags}>
      <div
        className={classNames({
          [styles.tags__type]: true,
          [styles[`tags__type__${category.label.toLowerCase()}`]]: true,
        })}
      >
        {category.label}
      </div>
      <div className={styles.tags__portion}>
        {size} g
      </div>
      <div className={styles.tags__peopleqty}>
            Serve {serving} pessoa{serving === 1 ? '' : 's'}
      </div>
      <div className={styles.tags__price}>
        {price}
      </div>
    </div>
  )
}