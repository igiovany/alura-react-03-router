import { ReactComponent as Logo } from 'assets/logo.svg'
import styles from './NavMenu.module.scss'
import { Link } from 'react-router-dom'

export function NavMenu() {

  const routes = [{
    label: 'Início',
    to: '/'
  }, {
    label: 'Cardápio',
    to: '/cardapio'
  }, {
    label: 'Sobre',
    to: '/sobre'
  }]
  return (
    <nav className={styles.navMenu}>
      <Logo />
      <ul className={styles.navMenu__list}>
        {routes.map((route, index) => (
          <li key={index} className={styles.navMenu__link} >
            <Link to={route.to}>
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}