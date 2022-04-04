import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import ProductItem from "../../components/productItem";
import "./style.css";
const ProductsOverview = () => {
const [products,setProducts] = useState([])
useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then(data=>{
        setProducts(data.data)
    })
},[])
  return (
    <div className="mainContainer">
      <Header title="Product Overview" />
      <div className="productsContainer">
        {products.map((item,key) => {
          return <ProductItem data={item} key={key}/>;
        })}
      </div>
    </div>
  );
};

export default ProductsOverview;
