import { Home } from './Pages/Home'
import { Cart } from './Pages/Cart'
import { Favorites } from './Pages/Favorites'
import { Order } from './Pages/Order'
import  Logins  from './Pages/Login'
import Registro from './Pages/Registro'
import Sidebar from './component/Sidebar'
import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Outlet,
  Route
} from 'react-router-dom'

const App = () =>{
const [user, userState]= useState(false)
 return(
  
  <Router >
    <Routes>
      <Route path='/' element={<Root />}>
      <Route index element={<Logins />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/favs' element={<Favorites />} />
        <Route path='/orders' element={<Order />} />
        <Route path='/registro' element={<Registro/>}/>
      </Route>
    </Routes>
  </Router>)
  }

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
