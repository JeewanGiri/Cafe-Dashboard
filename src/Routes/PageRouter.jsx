import {Route,Routes} from 'react-router-dom'
import Login from '../Pages/Login'
import Dash from '../Component/Dash'
import PrivateRoutes from './PrivateRoutes'
const PageRouter = () => {
  return (
    <Routes>
      <Route path='/login'  element={<Login/>}/>
      <Route element={<PrivateRoutes/>}>
      <Route path='/'  element={<Dash/>}/>
      <Route path='/*'  element={<Dash/>}/>
      </Route>
    </Routes>
  )
}
export default PageRouter
