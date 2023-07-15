import styles from './NotFound.module.scss'
import stylesThmeme from 'styles/Theme.module.scss'
import { ReactComponent as NotFoundImg } from 'assets/not_found.svg'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'

export function NotFound() {
  const navigate = useNavigate()
  return (
    <div className={classNames({
      [styles.container]: true,
      [stylesThmeme.container]: true
    })} >
      <div className={styles.back}>
        <button onClick={() => {navigate(-1)}} >
          {'< Voltar'}
        </button>
      </div>
      <NotFoundImg />
    </div>
  )
}