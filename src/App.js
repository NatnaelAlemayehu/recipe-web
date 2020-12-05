import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./component/navigation/navigation";
import Home from "./page/home/home";
import Signup from "./page/auth/signup";
import Login from "./page/auth/login";
import Recipes from "./page/recipes/recipes"

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/search/:file/:cat/:value" component={Recipes} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
