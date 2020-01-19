import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./example/home";
import Product from "./example/product/product";
import About from "./example/about";
import Tabs from "./example/product/tabs";

export const routes = [
  {
    path: "/",
    component: Home,
    exact:true
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/product",
    component: Product,
    routes: [
      {
        path: "/product",
        component: Tabs,
        exact:true
      },
      {
        path: "/product/tabs",
        component: Tabs
      }
    ]
  },
  {
    path: "/about",
    component: About
  }
];

export function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
