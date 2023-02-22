import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/actionTypes";

const initialState = {
  numOfItems: 0,
};

const cartReducer = (state = initialState, action) => {
  console.log(state,90)
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems + 1,
      };

    case DELETE_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems - 1,
      };
    default:
      return state;
  }
};

export { cartReducer };