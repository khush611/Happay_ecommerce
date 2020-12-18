import { INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT } from "./types";

export const productQuantity = (action, name) => {
  return (dispatch) => {
    // console.log("Inside Product Quantity");
    // console.log("The Action is: ", action);
    // console.log("Product index: ", name);

    dispatch({
      type: action === "increase" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
      payload: name
    });
  };
};

export const clearProduct = (name) => {
  return (dispatch) => {
    // console.log("Inside clear product");
    // console.log("Product index: ", name);

    dispatch({
      type: CLEAR_PRODUCT,
      payload: name
    });
  };
};
