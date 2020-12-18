import React from "react";
import "./cart.css";
import { connect } from "react-redux";
import { productQuantity, clearProduct } from "./actions/productQuantity";

import { Link } from "react-router-dom";
function Cart({ basketProps, productQuantity, clearProduct }) {
  // console.log("cart----");
  // console.log(basketProps);
  //looping through the product obj
  let productsInCart = [];
  let productsPrice = [];
  Object.keys(basketProps.products).forEach(function (item) {
    // console.log(item);
    // console.log(basketProps.products[item].inCart);
    if (basketProps.products[item].inCart) {
      productsInCart.push(basketProps.products[item]);
      productsPrice.push(basketProps.products[item]);
    }
    console.log(productsInCart + " " + productsPrice);
  });
  //looping ends
  productsInCart = productsInCart.map((product, index) => {
    return (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{product.name}</td>
        <td>
          <button className="button left-button">
            <ion-icon
              name="remove"
              onClick={() => productQuantity("decrease", product.id - 1)}
            ></ion-icon>
          </button>
          <span className="number">
            {product.numbers === 0
              ? clearProduct(product.id - 1)
              : product.numbers}
          </span>
          <button className="button right-button">
            <ion-icon
              name="add"
              onClick={() => productQuantity("increase", product.id - 1)}
            ></ion-icon>
          </button>
        </td>
        <td>
          <button
            className="remove"
            onClick={() => clearProduct(product.id - 1)}
          >
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </td>
      </tr>
    );
  });

  productsPrice = productsPrice.map((product, index) => {
    console.log("prod : ", product);
    return (
      <ul className="list-group">
        <li className="list-group-item">
          <span className="price-left">
            {product.numbers} x $ {product.final_price}
          </span>
          <span className="price-right">
            $ {product.numbers * product.final_price}
          </span>
        </li>
        {product.original_price ? (
          <li className="list-group-item">
            <span className="price-left">Total savings</span>
            <span className="price-right text-success">
              -$ {product.numbers * product.original_price}
            </span>
          </li>
        ) : null}
      </ul>
    );
  });
  const delivery = 5;
  const tax = 2;
  return (
    <div className="Cart">
      <div className="container">
        <div className="row justify-content-center">
          <Link to="/products" className="link">
            <span>🠔Back to Home</span>
          </Link>
          <h2>Order Summary({productsInCart.length})</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col col-custom">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">S.NO.</th>
                  <th scope="col">ITEMS</th>
                  <th scope="col">QTY</th>
                  <th scope="col">REMOVE</th>
                </tr>
              </thead>
              <tbody>{productsInCart}</tbody>
            </table>
          </div>
          <div className="col price-col">
            <h3>Price Details</h3>
            <ul className="list-group">
              {productsPrice}
              <li className="list-group-item">
                <span className="price-left">Delivery Fee</span>
                <span className="price-right">$ {delivery}.00</span>
              </li>
              <li className="list-group-item">
                <span className="price-left">Tax and Charges</span>
                <span className="price-right">$ {tax}.00</span>
              </li>
              <li className="list-group-item">
                <span className="price-left">
                  <b>To Pay</b>
                </span>
                <span className="price-right">
                  {basketProps.cartCost !== 0 ? (
                    <b>$ {basketProps.cartCost + delivery + tax}</b>
                  ) : (
                    <b>$ {basketProps.cartCost}</b>
                  )}
                </span>
              </li>
            </ul>
            <div class="row">
              <button type="button" class="btn btn-primary btn-lg btn-block">
                Place Order
              </button>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <Link to="/products" className="link">
            <span className="add-items">
              <b>
                <ion-icon name="add"></ion-icon>Add more Items
              </b>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  basketProps: state.basketState
});

export default connect(mapStateToProps, { productQuantity, clearProduct })(
  Cart
);
