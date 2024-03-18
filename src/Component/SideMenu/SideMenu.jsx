import { useNavigate } from 'react-router-dom'
import { AppstoreAddOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import {motion} from 'framer-motion'
const SideMenu = () => {
  const items=[
    {
      label:'Dashboard',
      icon:<AppstoreAddOutlined/>,
      key:'/dashboard'
    },
    {
      label:'Inventory',
      icon:<ShopOutlined/>,
      key:'/inventory'
    },
    {
      label:'Menu',
      icon:<ShoppingCartOutlined/>,
      key:'/menu'
    },
    {
      label:'Reports',
      icon:<UserOutlined/>,
      key:'/report'
    },
    {
      label:'Category',
      icon:<UserOutlined/>,
      key:'/category'
    },
    {
      label:'Order',
      icon:<ShopOutlined/>,
      key:'/order'
    }
  ]
  const navigate=useNavigate();
 const handleClick=(key)=>{
   navigate(key);
 }
  return (
    <motion.div className="SideMenu"
     initial={{ opacity:0,y:150 }}
     animate={{opacity:1,y:0}}
     transition={{duration:2}}
    >
           {
            items.map((item,index)=>{
              return(
                <motion.div  className='container' key={index} onClick={()=>handleClick(item.key)}
                whileHover={{scale:1.2,originX:0,color:'#fBe112'}}
                transition={{type:'spring', stiffness:300}}
                >
                <div>
                     <p>{item.icon}</p>
                </div>
                <div >
                     <p>{item.label}</p>
                </div>
                </motion.div>
              )
            })
           }
    </motion.div>
  )
}

export default SideMenu
 