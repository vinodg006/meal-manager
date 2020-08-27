import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routeConfig from "./routeConfig";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <Switch>
              {routeConfig.map(
                ({ path, component: Component, isExact }, index) => (
                  <Route
                    key={index}
                    {...(isExact ? { exact: true } : {})}
                    path={path}
                    component={Component}
                  />
                )
              )}
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
