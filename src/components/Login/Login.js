import { AppBar } from "@material-ui/core";
import { height } from "@material-ui/system";
import { useState } from "react";
import {useAuth}  from "../contect api/Context";

import Image from './online.jpg';
import './Login.css'
import Home from '../Homepage/Homepage'
import Register from './Register';
import { Link } from "react-router-dom";
const Login = () => {

    const {user} = useAuth();
    console.log(user, "user is this")    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
   

    const {Signup} = useAuth();
    
    const {signInWithGoogle} = useAuth();
 

    
    const handle = () => {
        const detail = {
            'email':email,
            'password':password
        }
           
   
        
        try{ 
            Signup(detail['email'],detail['password']);
            console.log("done");

        }
        catch (e) {
            console.log(e);
        }

    }
    

    const Google = ()  => {
        try {const reg = signInWithGoogle();
        console.log(reg);
        }
        catch(err) {
            console.log(err);
        }
    }
    



    return(
         <>
         <div className = "login-container">
                
                       <div className = "content-login">
                           <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt = "" />
                            
                            <div className = "login-box">
                                <h1>Sign-in</h1>
                             <br></br>
                                <h2>Use your Email</h2>
                     <br></br>           <input value = {email} onChange = { e => setEmail(e.target.value)} placeholder = "email"></input>
                            <br></br>    <input type = "password" value = {password} onChange = {e=> setPassword(e.target.value)} placeholder = "password"  ></input>
                               <br></br> 
                             
                            <button className = "btn-log" onClick = {handle}>Register</button>
                            <span><a href = "" ></a></span>
                            <Link to = "/register"> Login here</Link> 
                            <br></br>    <button className = "btn-googles" onClick = {Google}>Goggle Account</button>
                            </div>
                      
                      
                       </div>
       
                  </div> 
                     
     </>
    )

}

export default Login;