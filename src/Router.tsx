import { DefaultPage } from 'components/DefaultPage'
import { NavMenu } from 'components/NavMenu'
import { Home } from 'pages/Home'
import { Menu } from 'pages/Menu'
import { Routes, Route } from 'react-router-dom'


export function Router() {
  return(
    <main>
      <NavMenu />
      <Routes>
        <Route path='/' element={<DefaultPage />}> 
          <Route index element={<Home />} />
          <Route path='cardapio' element={<Menu />} />
        </Route>
      </Routes>
    </main>
  )
}