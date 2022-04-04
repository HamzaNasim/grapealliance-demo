import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import "./style.css";

const ProductItem = ({ data }) => {
  const { image, rating, title, price } = data;
  return (
    <Link className="productItemContainer" to={{
      pathname: "/details",
    }}
      style={{ textDecoration: 'none' }}
      state={{ data }}
    >
      <div className="productItemContainer-imageContainer">
      <img src={image} alt={title} />
      </div>
      <div className="productItemContainer-titleContainer">
        <h3>{title}</h3>
      </div>
      <div className="productItemContainer-ratingContainer">
        <h3>
          Rating: {rating.rate} ({rating.count})
        </h3>
        <div style={{paddingLeft:30}}>
          
        <ReactStars
          edit={false}
          count={parseInt(rating.rate)}
          size={24}
          color1={'rgb(220,220,0)'} />
      </div>
      </div>
      <div className="productItemContainer-priceContainer">
        <h3>{price}$</h3>
      </div>
    </Link>
  );
};

export default ProductItem;
