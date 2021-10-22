import { types } from "../types/types";

const initialState = {};

const ReducerPracticas = (state = initialState, action) => {
  switch (action.type) {
    case types.practicas:
      return action.payload;
    default:
      return state;
  }
};

export default ReducerPracticas;
