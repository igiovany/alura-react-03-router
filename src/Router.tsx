import { DefaultPage } from 'components/DefaultPage'
import { Footer } from 'components/Footer'
import { NavMenu } from 'components/NavMenu'
import { About } from 'pages/About'
import { Home } from 'pages/Home'
import { Menu } from 'pages/Menu'
import { NotFound } from 'pages/NotFound'
import { Routes, Route } from 'react-router-dom'


export function Router() {
  return(
    <main>
      <NavMenu />
      <Routes>
        <Route path='/' element={<DefaultPage />}> 
          <Route index element={<Home />} />
          <Route path='cardapio' element={<Menu />} />
          <Route path='sobre' element={<About />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </main>
  )
}