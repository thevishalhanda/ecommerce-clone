import Header from "./Header"
import Product from "./Product"
import Productdata from "../Product Data/Productdata"
import { useProduct } from "../contect api/ProductCo"

const Home = () => {

    const {products} = Productdata;
    console.log(products)
    const {handleProduct} = useProduct();
 
    return(
        <>
        <Header/>
        <Product />

        </>
    )
}

export default Home;