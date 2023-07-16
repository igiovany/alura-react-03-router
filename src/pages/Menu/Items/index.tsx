import styles from './Items.module.scss'
import { Item } from './Item'
import menu from '../../../data/menu.json'
import { useState, useEffect } from 'react'
import { Menu } from 'types/Dishe'


interface Props {
  search: string;
  filter: number | null;
  sorter: string;
}

export function Items(props: Props) {

  const [list, setList] = useState(menu)
  const { search, filter, sorter } = props

  function testSearch(title: string) {
    const regex = new RegExp(search, 'i')
    return regex.test(title)
  }

  function testFilter(id: number) {
    if (filter !== null) return filter === id
    return true
  }

  function sort(newList: Menu) {
    switch (sorter) {
    case 'porcao':
      return newList.sort((a, b) => a.size > b.size ? 1 : -1)
    case 'qtd_pessoas':
      return newList.sort((a, b) => a.serving > b.serving ? 1 : -1)
    case 'preco':
      return newList.sort((a, b) => a.price > b.price ? 1 : -1)
    default:
      return newList
    }
  }

  useEffect(() => {
    const newList = menu.filter(item => testSearch(item.title) && testFilter(item.category.id))
    setList(sort(newList))
  }, [search, filter, sorter])

  return (
    <div className={styles.items}>
      {list.map(item => (
        <div key={item.id}>
          <Item
            {...item}
          />
        </div>
      ))}
    </div>
  )
}