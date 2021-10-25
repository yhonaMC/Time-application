import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RutasPrivadas from "./PrivateRouter";
import RutasPublicas from "./PublicRouter";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useDispatch } from "react-redux";
import { LoginAuth } from "../Redux/action/action";
import Home from "../View/Home/Home";
// Components
import Inicio from "../View/Inicio/Inicio";
import Registro from "../View/Registro/Registro";

const Routes = () => {
  const [isAuth, setIsAuth] = useState(false);
  const dispatch = useDispatch();
  const auth = getAuth();
  const [isCheck, setIsCheck] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsCheck(true);
      if (user?.uid) {
        dispatch(LoginAuth());
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
  }, [auth, dispatch]);

  return (
    <Router>
      <Switch>
        <RutasPublicas exact path="/" isAuthh={isAuth} component={Inicio} />

        <RutasPublicas
          exact
          path="/registro"
          isAuthh={isAuth}
          component={Registro}
        />

        <RutasPrivadas exact path="/home" isAuthh={isAuth} component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
