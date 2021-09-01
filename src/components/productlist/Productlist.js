

import  './Productlist.css';
const Productlist = ({products , AddProduct}) => {
   

   
  
   
    
    return(

        <div className = "content">
          

         
            <h2>{products.name}</h2>
        

             <h3>
                 {Array(products.rating)
                 .fill()
                 .map((_, i) => (
                     <p>⭐</p>
                 ))
}</h3>              
            <img src = {products.image} alt = ""/>

            <h4> ${products.price}</h4>

             <button onClick = {() => AddProduct(products)}>Add</button>   

            </div>
    )
}

export default Productlist;