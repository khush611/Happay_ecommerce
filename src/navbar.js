import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getNumbers } from "./actions/getAction";
import "./styles.css";
function Navbar(props) {
  // console.log("navbar: ", props);
  useEffect(() => {
    getNumbers();
  }, []);

  return (
    <div className="Navbar">
      <ul>
        <li>
          <Link to="/products" className="nav-link logo">
            <img
              src="https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg"
              alt="logo"
            />
            <span className="logo-name">Happay</span>
          </Link>
        </li>
        <li className="right">
          <Link to="/#" className="nav-link">
            <img
              src="https://images.unsplash.com/photo-1592755219588-d4ff92a0d4de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt="avatar"
              id="avatar"
            />
          </Link>
        </li>
        <li className="right">
          <Link to="/cart" className="nav-link">
            <ion-icon name="cart-outline"></ion-icon>
            <span>{props.basketProps.basketNumbers}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
const mapStateToProps = (state) => ({
  basketProps: state.basketState
});
export default connect(mapStateToProps, { getNumbers })(Navbar);
