import React , {useState ,useEffect} from 'react';
import { validate } from './validate';
import {  ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { notify } from '../toast';
  import { Link } from 'react-router-dom';
  import './signup.css';

const Login = () => {
    const [data , setData] = useState({
        name : "",
        email:"",
        password : "",
      
        
    })
    const [errors , setErrors] = useState({})
    const [touched , setTouched] = useState({})


    

    useEffect(() => {
        setErrors(validate(data , "login"))
    }, [data , touched])

    const changeHandler = (event) => {
     
           setData({...data , [event.target.name] : event.target.value})
       
    }
    const focusHandler = (event) => {
        setTouched({...touched, [event.target.name] : true})
    }
    const submitHandler = (event) => {
       event.preventDefault();
       
       if(!Object.keys(errors).length){
           notify("loged in successfully" , "success")
       }else {
        notify("invalid data" , "error")
           setTouched({
               name : true ,
               email:true,
               password:true,
              
           })
       }
    }
   

    return (
        <div className="countainer">
            <form onSubmit={submitHandler} className="form-countainer">
                <h2 className="header">Login</h2>
               
                <div className="formfield">
                    <label> Email </label>
                    <input 
                    type="text" 
                    name="email" 
                    value={data.email} 
                    onChange={changeHandler} 
                    onFocus={focusHandler} 
                    className={(errors.email && touched.email) ? "uncompleted" : "formInput"}/>
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div >
                <div className="formfield">
                    <label> Password </label>
                    <input 
                    type="password" 
                    name="password" 
                    value={data.password} 
                    onChange={changeHandler} 
                    onFocus={focusHandler} 
                    className={(errors.password && touched.password) ? "uncompleted" : "formInput"}/>
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                
               
                <div className="formButtons">
                        <Link to="/signup"> SignUp</Link>
                    <button> Login </button>
                    </div>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default Login;