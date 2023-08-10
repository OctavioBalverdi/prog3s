import { Home } from './Pages/Home'
import { Cart } from './Pages/Cart'
import { Favorites } from './Pages/Favorites'
import { Order } from './Pages/Order'
import Sidebar from './component/Sidebar'
import {
  BrowserRouter as Router,
  Routes,
  Outlet,
  Route
} from 'react-router-dom'

const App = () =>
  <Router >
    <Routes>
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/favs' element={<Favorites />} />
        <Route path='/orders' element={<Order />} />
      </Route>
    </Routes>
  </Router>

export default App

const Root = () =>
  <>
    <div>
      <Sidebar />
    </div>
    <div>
      <Outlet />
    </div>
  </>
