import { useForm } from "react-hook-form"
import cafe from '../assets/images.jpeg'
import { useMutation } from "react-query";
import useAxiosPrivate from "../CustomHook/useAxiosPrivate";
import { apiRequest } from "../apiProvider/api.services";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import "../Styling/login.css"
const Login = () => {
  const history=useNavigate();
  const axiosPrivate = useAxiosPrivate()
  const onSubmit = (data) => {
    mutateLogin(data)
  } 
  const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm();

  const {
    mutate: mutateLogin,
    isLoading,

  } = useMutation(
    (data) =>
      apiRequest(axiosPrivate, {
        url: `/user/login`,
        method: "post",
        data,
      }),
    {
      onSuccess: (resp) => {
        toast("Login Successfully !!")
        history('/')
        localStorage.setItem("token",resp.data.token)
      },
       onError: (e) => {
        console.log("the errr",e)

      },
    }
  );

  return (
    <>
      <div className="login">
          <div className="login-container">
            <div className="login-container-img">
            <img src={cafe} alt='image'/>
            </div>
            <div  className="login-container-input">
               <p>Welcome</p><hr/>
               <form onSubmit={handleSubmit(onSubmit)}>
               <div className='form'>
               
               <div className='top'>
                <input type="text" {...register("email",{required:true})} />
               </div>
               <div className='down'>
                <input type='password' {...register("password",{required:true})}/>
               </div>
               {
                errors.password && <p>Password is required!</p>
               }
               <button type="submit">Submit</button>
               {
                isLoading ?'loading...':''
               }
               </div>
               <h5>Forget Username/Password<hr/></h5>
               <h5>Signup</h5>
               </form>
            </div>
          </div>
     </div>
   </>
  )
}

export default Login
