import menu from '../../data/menu.json'
import styles from './Home.module.scss'
import stylesTheme from 'styles/Theme.module.scss'
import ourPlace from 'assets/our_place.png'
import {useNavigate} from 'react-router-dom'

export function Home() {
  let recommendedDishes = [...menu]
  recommendedDishes = recommendedDishes.sort(() => 0.5 - Math.random()).splice(0, 3)
  const navigate = useNavigate()


  function handleDisheDetail(dishe: typeof menu[0]) {
    navigate(`/prato/${dishe.id}`, {state: { dishe }})
  }

  return (
    <section>

      <h3 className={stylesTheme.title}>
        Recomendações da cozinha
      </h3>
      <div className={styles.recommendation}>
        {recommendedDishes.map(item => (
          <div key={item.id} className={styles.recommended}>
            <div className={styles.recommended__image} >
              <img src={item.photo} alt={item.title} />
            </div>
            <button
              className={styles.recommended__button}
              onClick={() => handleDisheDetail(item)}
            >
              Ver Mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTheme.title}> Nossa casa </h3>
      <div className={styles.ourPlace}>
        <img src={ourPlace} alt="Casa do aluroni" />
        <div className={styles.ourPlace__address}>
          Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  )
}