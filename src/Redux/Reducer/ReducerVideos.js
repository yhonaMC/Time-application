import { types } from "../types/types";

const initialState = {};

const ReducerVideos = (state = initialState, action) => {
  switch (action.type) {
    case types.videos:
      return action.payload;
    default:
      return state;
  }
};

export default ReducerVideos;
