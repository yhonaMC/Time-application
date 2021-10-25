import React from "react";
import { Route, Redirect } from "react-router";

function RutasPublicas({ isAuthh, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthh ? <Redirect to="/home" /> : <Component {...props} />
      }
    />
  );
}

export default RutasPublicas;
