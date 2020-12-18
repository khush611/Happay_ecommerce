import {
  ADD_PRODUCT_BASKET,
  GET_NUMBERS_BASKET,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_PRODUCT
} from "../actions/types";
import productsData from "../productsData";

for (let i of productsData) {
  i.numbers = 0;
  i.inCart = false;
}
let prod = { ...productsData };
const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: prod
};
// console.log("b---");
// console.log(initialState.products);

export default (state = initialState, action) => {
  let productSelected = "";
  switch (action.type) {
    case ADD_PRODUCT_BASKET:
      productSelected = { ...state.products[action.payload] };
      productSelected.numbers += 1;
      productSelected.inCart = true;
      // console.log("productSelected basketreducer : ", productSelected);
      return {
        ...state,
        //return final price and numbers for each obj here to print the cost individually
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].final_price,
        products: {
          ...state.products,
          [action.payload]: productSelected
        }
      };
    case GET_NUMBERS_BASKET:
      return {
        ...state
      };
    case INCREASE_QUANTITY:
      productSelected = { ...state.products[action.payload] };
      productSelected.numbers += 1;
      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].final_price,
        products: {
          ...state.products,
          [action.payload]: productSelected
        }
      };
    case DECREASE_QUANTITY:
      productSelected = { ...state.products[action.payload] };
      let newCartCost = 0;
      let newBasketNumbers = 0;
      if (productSelected.numbers === 0) {
        productSelected.numbers = 0;
        newCartCost = state.cartCost;
        newBasketNumbers = state.basketNumbers;
      } else {
        productSelected.numbers -= 1;
        newCartCost =
          state.cartCost - state.products[action.payload].final_price;
        newBasketNumbers = state.basketNumbers - 1;
      }
      return {
        ...state,
        basketNumbers: newBasketNumbers,
        cartCost: newCartCost,
        products: {
          ...state.products,
          [action.payload]: productSelected
        }
      };
    case CLEAR_PRODUCT:
      productSelected = { ...state.products[action.payload] };
      let numbersBackup = productSelected.numbers;
      productSelected.numbers = 0;
      productSelected.inCart = false;
      return {
        ...state,
        basketNumbers: state.basketNumbers - numbersBackup,
        cartCost: state.cartCost - numbersBackup * productSelected.final_price,
        products: {
          ...state.products,
          [action.payload]: productSelected
        }
      };
    default:
      return state;
  }
};
