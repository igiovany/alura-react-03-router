import styles from './NotFound.module.scss'
import stylesThmeme from 'styles/Theme.module.scss'
import { ReactComponent as NotFoundImg } from 'assets/not_found.svg'
import classNames from 'classnames'

export function NotFound() {
  return (
    <div className={classNames({
      [styles.container]: true,
      [stylesThmeme.container]: true
    })} >
      <NotFoundImg />
    </div>
  )
}