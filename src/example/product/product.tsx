import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { RouteWithSubRoutes } from "../../routes";

export default class Product extends React.Component {
  
  render() {
    return (
      <div id="content-wrap">
        <div id="content" class="wrapper">
            <div id="content-inner">
            <Switch>
              {this.props.routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </Switch>
              <aside id="sidebar" role="navigation">
                <div class="inner">
                  <strong class="sidebar-title">基础组件</strong>
                  <Link to="/product/tabs"  class="sidebar-link">Tabs</Link>
                  </div>
              </aside>
            </div>
        </div>
      </div>
    );
  }
}
