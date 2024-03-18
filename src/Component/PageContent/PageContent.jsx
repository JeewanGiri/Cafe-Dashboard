import AppRouter from "../AppRouter/AppRouter"
import {motion} from "framer-motion"
const PageContent = () => {
  return (
    <motion.div className="PageContent"
     initial={{ opacity:0,x:150 }}
     animate={{opacity:1,x:0}}
     transition={{duration: 2 }}
    >
         <AppRouter/>
    </motion.div>
  )
}

export default PageContent
