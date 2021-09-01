import { useContext, useState } from "react";
import { createContext } from "react";
import Image1 from './shu.jpg';
import Image2 from './elon.jpg';
import Image3 from './skin.jpg';


const ProductContext = createContext();

export function useProduct() {
    return useContext(ProductContext);
}

export const ProductProvider = ({children}) => {
    const [cartItems,setCartItems] = useState([]);

 
         
       

        const AddProduct = (product) => {
            const exist = cartItems.find((x) => x.id === product.id);
            if (exist) {
              setCartItems(
                cartItems.map((x) =>
                  x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
              );
            } else {
              setCartItems([...cartItems, { ...product, qty: 1 }]);
            }
          };

     
    
          const RemoveProduct = (product) => {
            const exist = cartItems.find((x) => x.id === product.id);
            if (exist.qty === 1) {
              setCartItems(cartItems.filter((x) => x.id !== product.id));
            } else {
              setCartItems(
                cartItems.map((x) =>
                  x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
              );
            }
          };

    
const products = [

    
{        id: '1',
        name:'The Rudest Book Ever',
        price: 100,
        rating: 4,
        image:Image1
       

   },


   { id: '2',
        name:'Skin in the Game',
        price: 200,
        rating: 3,
        image:Image2
        },
   {
    id: '3',
    name:'Elon Musk Biography',
    price: 340,
    rating: 2,
    image:Image3
   
   }
]









const value = {
    products,
    AddProduct,
    RemoveProduct,
    cartItems
  

}

return (
  
    <ProductContext.Provider value = {value}>
           {children}
    </ProductContext.Provider>

)

}