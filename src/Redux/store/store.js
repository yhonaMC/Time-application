import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ReducerVideos from "../Reducer/ReducerVideos";
import ReducerPracticas from "../Reducer/ReducerPracticas";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducer = combineReducers({
  videos: ReducerVideos,
  practicas: ReducerPracticas,
});

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
