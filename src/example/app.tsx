import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { routes, RouteWithSubRoutes } from "../routes";
import "../assets/css/navy.css";
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <header id="header" class="wrapper">
          <div id="header-inner" class="inner">
            <h1 id="logo-wrap">
              <Link id="logo" to="/">
                TalkingUi
              </Link>
            </h1>
            <nav id="main-nav">
              <Link className="main-nav-link" to="/product">
                产品中心
              </Link>
              <Link className="main-nav-link" to="/about">
                关于我们
              </Link>
              <a
                href="https://github.com/italking/talkingui-react"
                title="GitHub"
                class="main-nav-link"
              >
                <i class="fab fa-github" />
              </a>
              <a
                href="https://www.imisland.com"
                title="博客"
                class="main-nav-link"
              >
                <i class="fab fa-blogger" />
              </a>
            </nav>
            <a id="mobile-nav-toggle">
              <span class="mobile-nav-toggle-bar" />
              <span class="mobile-nav-toggle-bar" />
              <span class="mobile-nav-toggle-bar" />
            </a>
          </div>
        </header>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
        <footer id="footer" class="wrapper">
          <div class="inner">
            <div id="footer-copyright">
              &copy; 2018{" "}
              <a href="https://github.com/italking/apptalking" target="_blank">
                icewaterpp
              </a>
            </div>
            <div id="footer-links">
              <a
                href="https://github.com/italking/apptalking"
                class="footer-link"
                title="GitHub"
                target="_blank"
              >
                <i class="fab fa-github" />
              </a>
              <a
                href="https://www.imisland.com"
                class="footer-link"
                title="博客"
                target="_blank"
              >
                <i class="fab fa-blogger" />
              </a>
            </div>
          </div>
        </footer>
      </Router>
    );
  }
}
