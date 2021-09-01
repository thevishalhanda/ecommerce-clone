import Header from "../Homepage/Header";
import { useProduct } from "../contect api/ProductCo";
import { MinimizeOutlined, PlusOne } from "@material-ui/icons";
import './check.css'
import StripeCheckout from "react-stripe-checkout";
const  Checkout = () => {

   const { cartItems} = useProduct();
   console.log( cartItems);
   const {RemoveProduct} = useProduct();
   const {AddProduct} = useProduct();

   const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  
   
   const handleToken = (token, address) => {
    console.log({token,address});
   }


    return(
        
        <>
        <Header />

        <div className = "basket-container">

              <div className = "basket-content">
                   <h1>Cart Items</h1>
                    <div>{cartItems.length === 0 && <div> Cart is Empty</div>}</div>
                  {
                      cartItems.map((item) => (
                         <div key = {item.id} className = "row">
                         <div className = "col-2">{item.name} </div>
                         <div className = "col-2"><img src = {item.image}></img> </div>
                         <div className = "col-3">
                             <button onClick = {() => AddProduct(item)} className = "add"> <PlusOne  className = "add" /></button>
                             <button onClick = {() => RemoveProduct(item)} className = "add"> <MinimizeOutlined className = "minus"/></button>
                              
                              </div>
                              <div className = "col-2 text-right">
                                  {item.qty} x ${item.price.toFixed(2)}

                         </div>
                         </div>
                      ))
                  }
                  
        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 ">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 ">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row row-pay">
               
              <StripeCheckout  className = "btn-pay" stripeKey = "pk_test_51JUaRpSCjqloenu9T6iildmhO2FT9wz4t1FbWeWgHMgC2mCfVXgVZwXBlJqN228spvOnzQz9bRj4PEat0NtXA69F003vqYw8lU" 
                     token = {handleToken}
                     amount = {totalPrice*100}
                     name = {cartItems.name}
                     />
           
              
            </div>
          </>
        )}
              </div>

        </div>
        </>

    )

}
export default Checkout;