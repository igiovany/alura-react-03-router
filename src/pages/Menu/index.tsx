import {useState} from 'react'
import styles from './Menu.module.scss'
import { Search } from './Search'
import { Filters } from './Filters'
import { Sorter } from './Sorter'
import { Items } from './Items'

export function Menu() {

  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<number | null>(null)
  const [sorter, setSorter] = useState('')

  return (
    <main>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do código e da massa
        </div>
      </header>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Cardápio</h3>
        <Search search={search} setSearch={setSearch}/>
        <div className={styles.menu__filters}>
          <Filters filter={filter} setFilter={setFilter} />
          <Sorter sorter={sorter} setSorter={setSorter}/>
        </div>
        <Items search={search} filter={filter} sorter={sorter} />
      </section>
    </main>
  )
}