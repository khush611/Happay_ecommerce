import React from "react";
import "./products.css";

import { connect } from "react-redux";
import { addBasket } from "./actions/addAction";
function ProductDisplay(props) {
  // console.log("productdisplay: ", props);
  return (
    <div className="col">
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={props.img_url} alt="item img" />
        <div className="card-body">
          <span className="card-title">
            {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
          </span>
          <span className="right">$ {props.final_price}.00</span>
          <span className="right">
            {props.original_price ? (
              <strike className="text-muted">
                $ {props.original_price}.00
              </strike>
            ) : null}
          </span>
          <p className="card-text text-muted">{props.description}</p>
          <button
            onClick={() => props.addBasket(props.id - 1)}
            className="btn btn-primary btn-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { addBasket })(ProductDisplay);
