import React from "react";
import { SinglePage } from "../components/SinglePage";
import { MainPage } from "../layout/main.js";
import { Switch, Route } from "react-router-dom";

export const RootRoutes = () => (
  <>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/idForm" component={SinglePage} />
    </Switch>
  </>
);
