import {Routes,Route} from 'react-router-dom'
import Dashboard from '../../Pages/Dashboard/Dashboard'
import Inventory from '../../Pages/Inventory/Inventory'
import Customers from '../../Pages/Report/Report'
import Category from '../../Pages/Category/Category'
import Menu from '../../Pages/Orders/Menu'
import Order from '../Order/Order'
import TakeOrder from '../OrderList/TakeOrder'
import Detail from '../OrderList/Detail'
const AppRouter = () => {
  return (
    <Routes>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/inventory' element={<Inventory/>}/>
    <Route path='/menu' element={<Menu/>}/>
    <Route path='/report' element={<Customers/>}/>
    <Route path='/category' element={<Category/>}/>
    <Route path='/order' element={<Order/>}/>
    <Route path='/take-order' element={<TakeOrder/>}/>
    <Route path='/order-details/:orderId' element={<Detail/>}/>
   </Routes>
  )
}

export default AppRouter
