import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <>
      <header id="banner" class="wrapper">
        <div class="inner">
          <h2 id="banner-title">TalkingUi-Rect 轻量级 React UI 框架</h2>
          <div id="banner-start">
          </div>
          <div id="banner-share"></div>
        </div>
      </header>
<div id="content-wrap">
  <div class="wrapper">
    <div class="inner">
      <ul id="intro-feature-list">
        <li class="intro-feature-wrap">
          <div class="intro-feature"><div class="intro-feature-icon"><i class="fa fa-exchange-alt"></i></div>
            <h3 class="intro-feature-title">简单易用</h3>
            <p class="intro-feature-desc"></p>
          </div>
        </li>
        <li class="intro-feature-wrap"><div class="intro-feature">
          <div class="intro-feature-icon"><i class="fas fa-code"></i></div>
            <h3 class="intro-feature-title">快速上手</h3>
            <p class="intro-feature-desc"></p>
          </div>
        </li>
      </ul>
      <ul id="intro-cmd-wrap">

      </ul>

    </div>
  </div>
</div>
      </>
    );
  }
}
