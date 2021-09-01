import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contect api/Context";
import './register.css'


const Register = () => {

    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

       const {Login} = useAuth();
       const {Reset} = useAuth();
       const {signInWithGoogle} = useAuth();

       const {user} = useAuth();
       console.log(user);

    const Google = ()  => {
        try {const reg = signInWithGoogle();
        console.log(reg);
        }
        catch(err) {
            console.log(err);
        }
    }

    const handle = () => {
        const detail = {
            'email':email,
            'password':password
        }
           
   
        
        try{ 
            Login(detail['email'],detail['password']);
            console.log("done");
            history.push("/")

        }
        catch (e) {
            console.log(e);
        }

    }

    const Forget = () => {
          
      
        
        try{
              
        const mail = prompt("Enter your mail")
        const reset = Reset(mail);
        console.log("done");
        console.log(reset)

        }catch(err) {
            alert(err);
        }
        

        
    }
    
      
    
   
    return(
        <>
        <div className = "login-container">
               
                      <div className = "content-login">
                          <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt = "" />
                           
                           <div className = "login-box">
                               <h1>Sign-in</h1>
                              <br></br> <h2>Use your Email</h2>
                              <br></br> <input value = {email} onChange = { e => setEmail(e.target.value)} placeholder = "email"></input>
                           <br></br>    <input type = "password" value = {password} onChange = {e=> setPassword(e.target.value)} placeholder = "password"  ></input>
                              <br></br> 
                            
                           <button className = "btn-log" onClick = {handle}>Login</button>
                           <span><a href = "" onClick = {Forget}>forget Password ?</a></span>
                           <br></br>    <button className = "btn-googles" onClick = {Google}>Goggle Account</button>
                           </div>
                     
                     
                      </div>
      
                 </div> 
                    
    </>
    )
}
export default Register;