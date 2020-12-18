import React from "react";
import "./products.css";
import productsData from "./productsData";
import ProductDisplay from "./productDisplay";

function Products(props) {
  const products = productsData.map((item) => (
    <ProductDisplay
      key={item.id}
      id={item.id}
      name={item.name}
      original_price={item.original_price}
      final_price={item.final_price}
      description={item.description}
      img_url={item.img_url}
    />
  ));
  return (
    <div className="Cart">
      <h1>Most Popular</h1>
      <ion-icon name="arrow-back-outline"></ion-icon>
      <ion-icon name="star-outline"></ion-icon>
      <ion-icon name="arrow-forward-outline"></ion-icon>
      <div className="container">
        <div className="row">{products}</div>
      </div>
    </div>
  );
}
export default Products;
