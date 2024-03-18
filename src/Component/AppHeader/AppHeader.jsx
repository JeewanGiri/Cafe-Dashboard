import {Typography,Badge, Space} from "antd"
import {BellFilled,MailOutlined} from "@ant-design/icons"
import {motion} from 'framer-motion'
const AppHeader = () => {
  return (
    
    <motion.div className="AppHeader"
      initial={{ opacity:0,y:-100 }}
     animate={{opacity:1,y:0}}
     transition={{duration: 2 }}
    >
 <img src="./logo.jpg" alt="" width={40}/>
 <h2 style={{fontFamily:'verdana',fontWeight:600,color:'green'}}>
  Dashboard
 </h2>
 <Space>
      <Badge count={1}>
         <MailOutlined style={{fontSize:24}}/>
      </Badge>
      <Badge count={20}>
          <BellFilled style={{fontSize:24}}/>
      </Badge>
 </Space>
    </motion.div>    
  )
}

export default AppHeader
