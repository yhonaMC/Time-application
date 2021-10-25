import React from "react";
import { Route, Redirect } from "react-router";

function RutasPrivadas({ isAuthh, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthh ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default RutasPrivadas;
