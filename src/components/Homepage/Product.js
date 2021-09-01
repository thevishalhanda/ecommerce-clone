
import { useContext, useState } from 'react';
import Image from './img.jpg';
import './Product.css'

import Productlist from '../productlist/Productlist';

import { useProduct } from '../contect api/ProductCo';



const Product = () => {


    
       const {products} = useProduct();
   
       const {AddProduct} = useProduct();
       const {RemoveProduct} = useProduct();
        
   

    
   
    
    return ( 
        <div className = "container">
        <img src = {Image} alt = "" />


                     

                          <div className = "prudt">
                        
                        {
                            products.map((products) => (
                                <Productlist key = {products.key} products = {products} AddProduct = {AddProduct}
                              />
                            ))
                        }
                



        </div>

        </div>
    )
}

export default  Product;