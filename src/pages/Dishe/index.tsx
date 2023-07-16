import styles from './Dishe.module.scss'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'
import menu from 'data/menu.json'

export function Dishe() {
  const { state } = useLocation()
  const { dishe } = state as { dishe: typeof menu[0]}
  return (
    <>
      <button className={styles.back} >
        {'< Voltar'}
      </button>
      <section className={styles.container}>
        <h1 className={styles.title}>
          {dishe.title}
        </h1>
        <div className={styles.image}>
          <img src={dishe.photo} alt={dishe.title} />
        </div>
        <div className={styles.content}>
          <p className={styles.content__description}>
            {dishe.description}
          </p>
          <div className={styles.tags}>
            <div className={classNames({
              [styles.tags__type]: true,
              [styles[`tags__type__${dishe.category.label.toLowerCase()}`]]: true
            })}>
              {dishe.category.label}
            </div>
            <div className={styles.tags__portion}>
              {dishe.size}g
            </div>
            <div className={styles.tags__peopleqty}>
              Serve {dishe.serving} pessoa{dishe.serving === 1 ? '' : 's'}
            </div>
            <div className={styles.tags__price}>
              {dishe.price.toFixed(0)}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}