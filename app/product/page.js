'use client'
import ProductButton from "./product";

async function doSomething(){
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    // console.log(data);
    return data.products;
  }

async function Product() {
    let products = await doSomething();
    console.log(products[0])
    return ( 
        <div>
            <h1>Product List</h1>
            {
                products.map((item)=>{
                    return <div>
                    <h1>Name: {item.title}</h1>
                    <ProductButton price={item.price} />
                    </div>
                })
            }
        </div>
     );
}

export default Product;