import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const RedirectPage = () => {
    const history=useNavigate()
    const [count, setCount]=useState(5);
    useEffect(()=>{
            const interval =setInterval(()=>{
                setCount((currentCount)=>--currentCount);
            },500);

            count ===0 && history("/login");
            return () => clearInterval(interval);
    },[count]);
  return (
    <div>
        <p> 403-unAuthorized</p>
        <p> you are unAuthorized,Please login first!!</p>
         <p>Redirecting in - <span>{count}</span></p>
    </div>
  )
}

export default RedirectPage
