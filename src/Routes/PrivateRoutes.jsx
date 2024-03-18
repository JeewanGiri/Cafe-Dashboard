import { Outlet } from "react-router-dom"
import { CheckIsAuthorized } from "../Utils/IsAuth"
import RedirectPage from "./RedirectPage"

const PrivateRoutes = () => {
  return (
    <>
    {
        CheckIsAuthorized()?
      <Outlet/>
      :
     <RedirectPage/>
    }
    </>
  )
}

export default PrivateRoutes
