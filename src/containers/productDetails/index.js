
import "./style.css";
import React from "react";
import Header from "../../components/header";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation()
  const {state} = location
  const productDetails = state.data

  return (
    <div className="productDetailMainContainer">
      <Header title={productDetails.title || "Product Details"} />
      <div className="productDetailItemContainer">
        <div className="productDetailItemContainer-leftContainer">
          <img src={productDetails.image} alt={productDetails.title}/>
        </div>
        <div className="productDetailItemContainer-rightContainer">
          <div className="productDetailItemContainer-rightContainer-labelContainer">
            <h3>{productDetails.title}</h3>
          </div>
          <div className="productDetailItemContainer-rightContainer-descContainer">
           <h1>About this product:</h1>
            <h3>{productDetails.description}</h3>
          </div>
          <div className="productDetailItemContainer-rightContainer-descContainer">
            <p>Buy from the store now</p>
          </div>
          <div className="productDetailItemContainer-rightContainer-priceContainer">
            <h3>{productDetails.price} $</h3>
          </div>
          <div className="productDetailItemContainer-rightContainer-buttonContainer">
            <button>Add to Cart</button>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
