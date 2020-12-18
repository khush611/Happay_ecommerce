import { GET_NUMBERS_BASKET } from "./types";

export const getNumbers = () => {
  return (display) => {
    // console.log("Getting all Basket  Numbers");
    dispatchEvent({
      type: GET_NUMBERS_BASKET
    });
  };
};
