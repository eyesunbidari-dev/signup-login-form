import React , {useState ,useEffect} from 'react';
import { validate } from './validate';
import {  ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { notify } from '../toast';
  import { Link } from 'react-router-dom';
  import './signup.css';

const SignUp = () => {
    
    const [data , setData] = useState({
        name : "",
        email:"",
        password : "",
        confirmPassword : "",
        isAccepted :false
        
    })
    const [errors , setErrors] = useState({})
    const [touched , setTouched] = useState({})


    

    useEffect(() => {
        setErrors(validate(data , "signup"))
    }, [data , touched])

    const changeHandler = (event) => {
       if (event.target.name === "isAccepted") {
           setData({...data , [event.target.name] : event.target.checked})
       }else {
           setData({...data , [event.target.name] : event.target.value})
       }
    }
    const focusHandler = (event) => {
        setTouched({...touched, [event.target.name] : true})
    }
    const submitHandler = (event) => {
       event.preventDefault();
       
       if(!Object.keys(errors).length){
           notify("signed in successfully" , "success")
       }else {
        notify("invalid data" , "error")
           setTouched({
               name : true ,
               email:true,
               password:true,
               confirmPassword:true,
               isAccepted:true
           })
       }
    }
   

    return (
        <div className="countainer">
            <form onSubmit={submitHandler} className="form-countainer">
                <h2 className="header">SignUp</h2>
                <div className="formfield">
                    <label> Name </label>
                    <input 
                    type="text" 
                    name="name" 
                    value={data.name} 
                    onChange={changeHandler} 
                    onFocus={focusHandler}  
                    className={(errors.name && touched.name) ? "uncompleted" : "formInput"}/>
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
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
                <div className="formfield">
                    <label> ConfirmPassword </label>
                    <input 
                    type="password" 
                    name="confirmPassword" 
                    value={data.confirmPassword} 
                    onChange={changeHandler} 
                    onFocus={focusHandler} 
                    className={(errors.confirmPassword && touched.confirmPassword) ? "uncompleted" : "formInput"}/>
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div className="formfield">
                    <div className="checkBoxCountainer">
                    <label> I accept the privacy policy </label>
                    <input 
                    type="checkbox" 
                    name="isAccepted" 
                    value={data.isAccepted} 
                    onChange={changeHandler} 
                    onFocus={focusHandler} 
                    />
                    
                    </div>
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                    
                   
                   
                    
                </div>
                <div className="formButtons">
                        <Link to="/login"> Login </Link>
                    <button> SignUp</button>
                    </div>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default SignUp;