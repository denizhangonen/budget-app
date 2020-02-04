import React from "react";

import { Switch, withRouter, Redirect, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import Layout from "./hoc/Layout/Layout";
import Expenses from "./containers/Expenses/Expenses";
import NewExpense from "./containers/NewExpense/NewExpense";

class App extends React.Component {
  render() {
    const routes = (
      <Switch>
        <Route path="/expenses" component={Expenses} />
        <Route path="/new-expense" exact component={NewExpense} />
        <Redirect to="/" />
      </Switch>
    );
    return (
      <div className="App">
        <Layout>
          {routes}
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
