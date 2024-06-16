'use client'
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {

  const [product, setProduct] = useState();

  const doSomething = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();

    console.log(data)
    setProduct(data.products)
  }

  useEffect(()=>{
    doSomething()
  },[])

  return (
    <div>
      <h1>
        Product List
        {
          product.map((item)=> {
            return <h1> Name: {item.title} </h1>
          })
        }
      </h1>
    </div>
  );
}
