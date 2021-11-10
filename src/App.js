import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import APiLoadDataPage from "./components/APiLoadDataPage";
// import ErrorPage from "./components/ErrorPage";
import HomePage from "./components/HomePage";
import Menu from "./components/Menu";

export default function App() {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/student" component={APiLoadDataPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}
