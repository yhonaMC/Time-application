import React from "react";
import Principal from "../Components/Principal/Principal";
import Videos from "../Components/Videos/Videos";
import Practicas from "../Components/Practicas/Practicas";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Principal} />
        <Route exact path="/videos" component={Videos} />
        <Route exact path="/practicas" component={Practicas} />
      </Switch>
    </Router>
  );
};

export default Routes;
