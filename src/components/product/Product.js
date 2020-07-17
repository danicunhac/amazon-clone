import React from "react";
import "./Product.css";

import star from "../../images/star.png";
import { useStateValue } from "../stateProvider/StateProvider";

function Product({ id, title, image, price, rating }) {
  // Disabling warning for { basket } since can't keep it empty
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // Add item to basket...
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          {price}
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <img key={id++} src={star} alt="Star rating" />
            ))}
        </div>
      </div>
      <img src={image} alt="Product" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
