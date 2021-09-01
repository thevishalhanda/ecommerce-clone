import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import { AuthProvider } from './components/contect api/Context';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import  Home from './components/Homepage/Homepage.js';
import Login from './components/Login/Login.js'
import Header from './components/Homepage/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Login/Register';
import { ProductProvider } from './components/contect api/ProductCo';
import Checkout from './components/Checkout/check';


function App() {
  

  
  
  return (
    <>
    
    <AuthProvider>
    
    <ProductProvider>
    <Main />
    
    <BrowserRouter>
    <Switch>
    <PrivateRoute exact path = "/" component = {Login} />
     <Route exact path = "/home" component = {Home} />
     <Route exact path = "/register" component = {Register} />
     <Route  path = "/checklist" component = {Checkout} />
    </Switch>
    </BrowserRouter>
    </ProductProvider>
    </AuthProvider>
    </>
  );
}

export default App;
