import Login from './Pages/Login'
import "./Styling/Sass/Index.css"
import {  Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App


