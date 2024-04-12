import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from '../pages/About'
import Filtre from '../pages/Filtre'
import Home from '../pages/Home'
import Suggestion from '../pages/Suggestion'
import Dashboard from '../pages/protected/Dashboard'
import PrivateRoute from './PrivateRouteMiddleware'

function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='filtre' element={<Filtre />} />
        <Route path='suggestion' element={<Suggestion />} />
        <Route path='dashboard' element={<PrivateRoute />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
