import AppFooter from "./AppFooter/AppFooter"
import AppHeader from "./AppHeader/AppHeader"
import PageContent from "./PageContent/PageContent"
import SideMenu from "./SideMenu/SideMenu"
import "./Dash.scss"
import { Space } from "antd"
const Dash = () => {
  return (
    <div className="Dash" >
          <AppHeader/>
           <Space className="middlepart">
                <SideMenu/>
                <PageContent />
           </Space>
           <AppFooter/>
    </div>
  )
}

export default Dash
