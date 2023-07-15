import { Home } from 'pages/Home'
import { Menu } from 'pages/Menu'
import { Routes, Route } from 'react-router-dom'

export function AppRouter() {
  return(
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cardapio' element={<Menu />} />
    </Routes>
  )
}