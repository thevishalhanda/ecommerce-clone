import { ShoppingBasket } from '@material-ui/icons';
import { SearchSharp } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contect api/Context';
import './Header.css';
import { Link } from 'react-router-dom';
import { useProduct } from '../contect api/ProductCo';
const Header = () => {
   
  let history = useHistory();
   const {Logout} = useAuth()

    const { cartItems} = useProduct();
    console.log(cartItems)
    console.log(cartItems.length)
 
   const Signoff = () =>  {
     return Logout(); 

   
    
   }

    return(


<div className="header">
      
      <Link to = "/home">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchSharp className="header__searchIcon" />
      </div>

      <div className="header__nav">
        
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo" > <button className = "header__optionLineTwo-btn" onClick = {Signoff}> <Link to = "/" className = "header__optionLineTwo-btn">SignOff</Link> </button></span>
          </div>
        

        
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        
        

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        
          <div className="header__optionBasket">
            <Link to = "/checklist" className = "check" >            <ShoppingBasket /></Link>
 
            <span className="header__optionLineTwo header__basketCount">
              {cartItems.length}
            </span>
          </div>
             
          </div></div>   

        )
}

export default Header;