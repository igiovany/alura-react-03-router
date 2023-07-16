import { DefaultPage } from 'components/DefaultPage'
import { Footer } from 'components/Footer'
import { NavMenu } from 'components/NavMenu'
import { About } from 'pages/About'
import { Dishe } from 'pages/Dishe'
import { Home } from 'pages/Home'
import { Menu } from 'pages/Menu'
import { NotFound } from 'pages/NotFound'
import { Routes, Route } from 'react-router-dom'


export function Router() {
  return(
    <main className='container'>
      <NavMenu />
      <Routes>
        <Route path='/' element={<DefaultPage />}> 
          <Route index element={<Home />} />
          <Route path='cardapio' element={<Menu />} />
          <Route path='sobre' element={<About />} />
        </Route>
        <Route path='*' element={<NotFound />} />
        <Route path='prato/:id' element={<Dishe />} />
      </Routes>
      <Footer />
    </main>
  )
}