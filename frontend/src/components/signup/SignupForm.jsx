import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import Back from "../common/back/Back";
const SignUp = ()=>{

    const[loginForm,setLoginForm] = useState({
        email:"",
        password:"",
    })
    const onChangehandle = (e)=>{
      const {name,value} = e.target;
      setLoginForm({...loginForm,[name]:value});

    }
    const handleLoginForm = async (e)=>{
        try{
            e.preventDefault()
           
            const userLogin = await axios.post("http://localhost:6000/api/login",loginForm)

            if(userLogin.status === 200){
                if(userLogin.data.message === true){
                    const token = userLogin.data?.token;
                    localStorage.setItem(token)
                //    console.log(userLogin.data?token)
               // console.log(userLogin)
                     toast.success(userLogin.data.message)
                }else{
                    toast.error(userLogin.data.message)
                }
            }else{
                toast.error('Failed')
            }
            console.log(userLogin)
        } catch(error){
            console.log(error)
        }
    }
    return(
        <>
        <Back title="Signup"/>
        <form onSubmit={(e)=>handleLoginForm(e)}>
            <input type="text" name="email" value={loginForm.email} onChange={(e)=>onChangehandle(e)} placeholder="email"/> <br></br>
            <input type="text" name="password" value={loginForm.password} onChange={(e)=>onChangehandle(e)} placeholder="password"/> <br></br>
            <button type="submit">Login</button>
        </form>
        </>
    )
}
export default SignUp;