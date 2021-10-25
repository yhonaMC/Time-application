import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routers/Routes.jsx";
import { Provider } from "react-redux";
import { store } from "./Redux/store/store";

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
