import React from "react";

export default class About extends React.Component {
  render() {
    return (
      <div id="content-wrap">
      <div id="content" class="wrapper">
  <div id="content-inner">
    <article class="article-container" itemscope itemtype="http://schema.org/Article">
      <div class="article-inner">
        <div class="article">
          <div class="inner">
            <header class="article-header">
               <h1 class="article-title" itemprop="name">关于我们</h1>
            </header>
            <div class="article-content" itemprop="articleBody">
              <ul>
                <li>开发者：<a href="https://github.com/italking/resume" target="_blank" rel="noopener">https://github.com/italking/resume</a></li>
              </ul>
            </div>
            <footer class="article-footer">
            </footer>
          </div>
        </div>
        <aside id="article-toc" role="navigation">
          <div id="article-toc-inner">
            <strong class="sidebar-title">目录</strong>
            <a href="#" appTkAnchor id="article-toc-top">回到顶部</a>
          </div>
        </aside>
      </div>
    </article>
    <aside id="sidebar" role="navigation">
      <div class="inner">
      </div>
    </aside>
  </div>
</div>
</div>
    );
  }
}
