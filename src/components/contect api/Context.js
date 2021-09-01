import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import firebase from "firebase";


const AuthContext = createContext();

export  function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) =>  {
 
    const [user,setCurrentUser] = useState();
  
    const Signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    const Logout = () => {
        return auth.signOut();
    }
    const signInWithGoogle = () => {

        
        const googleProvider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(googleProvider).then((res) => {
          console.log(res.user)
        }).catch((error) => {
          console.log(error.message)
        })
      }


    const Login = (email,password) => {
        return auth.signInWithEmailAndPassword(email,password);
    }  

    const Reset = (email) => {
        return auth.sendPasswordResetEmail(email);
    }

   useEffect(() => {
          
    const user = auth.onAuthStateChanged(user => {
        setCurrentUser(user);
    })

    return user;
      
   },[])


   const value = {
       user,
       Login,
       Signup,
       signInWithGoogle,
       Reset,
       Logout

   }

   return (
       <AuthContext.Provider value = {value}>
           {children}
       </AuthContext.Provider>
   )


}


