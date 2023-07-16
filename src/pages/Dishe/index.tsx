import styles from './Dishe.module.scss'
import { useParams, useNavigate } from 'react-router-dom'
import menu from 'data/menu.json'
import { NotFound } from 'pages/NotFound'
import { DisheTags } from 'components/DisheTags'

export function Dishe() {
  const navigate = useNavigate()
  const { id } = useParams()
  const dishe = menu.find(item => item.id === Number(id))

  if (!dishe) {
    return <NotFound />
  }

  return (
    <>
      <button className={styles.back} onClick={() => navigate(-1)}>
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
          <DisheTags {...dishe} />
        </div>
      </section>
    </>
  )
}