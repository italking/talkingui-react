import React from "react";
import TkTab from "../../tkui/tabs/TkTab";
import TkTabHeaderList from "../../tkui/tabs/TkTabHeaderList";
import TkTabHeader from "../../tkui/tabs/TkTabHeader";
import TkTabContentList from "../../tkui/tabs/TkTabContentList";
import TkTabContent from "../../tkui/tabs/TkTabContent";
export default class Tabs extends React.Component {
  render() {
    return (
      <article class="article-container" itemscope itemtype="http://schema.org/Article">
  <div class="article-inner">
    <div class="article">
      <div class="inner">
        <header class="article-header">
          <h1 class="article-title" itemprop="name">Base Tab</h1>
        </header>
        <div class="article-content" itemprop="articleBody">
          <h2 id="组件介绍" class="article-heading">
            <a href="#组件介绍" class="headerlink" title="组件介绍"></a>
            组件介绍
            <a class="article-anchor" href="#组件介绍" aria-hidden="true"></a>
          </h2>
          <p>TalkingUI Base Tab 是一个简易的Tab 指令，可以支持Tab 内容的懒加载</p>
          <h2 id="组件示例" class="article-heading">
            <a href="#组件示例" class="headerlink" title="组件示例"></a>
            组件示例
            <a class="article-anchor" href="#组件示例" aria-hidden="true"></a>
          </h2>
          <h3 id="简单示例" class="article-heading">
            <a href="#简单示例" class="headerlink" title="简单示例"></a>
            简单示例
            <a class="article-anchor" href="#简单示例" aria-hidden="true"></a>
          </h3>
          <div>
             <TkTab>
               <TkTabHeaderList>
                 <TkTabHeader>帮助</TkTabHeader>
                 <TkTabHeader>API</TkTabHeader>
                 <TkTabHeader>介绍</TkTabHeader>
                 <TkTabHeader>介绍</TkTabHeader>
                 <TkTabHeader>介绍</TkTabHeader>
                 <TkTabHeader>介绍</TkTabHeader>
                 <TkTabHeader>介绍</TkTabHeader>
                 <TkTabHeader>介绍</TkTabHeader>
                 <TkTabHeader>介绍</TkTabHeader>
                 <TkTabHeader>介绍</TkTabHeader>
                 <TkTabHeader>介绍</TkTabHeader>
                 <TkTabHeader>介绍</TkTabHeader>
                 <TkTabHeader>介绍</TkTabHeader>
                 <TkTabHeader>介绍</TkTabHeader>
                 <TkTabHeader>介绍</TkTabHeader>
                 <TkTabHeader>介绍</TkTabHeader>
                 <TkTabHeader>介绍</TkTabHeader>
                 <TkTabHeader>介绍</TkTabHeader>
               </TkTabHeaderList>
               <TkTabContentList>
                 <TkTabContent>帮助内容</TkTabContent>
                 <TkTabContent>API内容</TkTabContent>
                 <TkTabContent>
                    介绍内容
                    <TkTab>
                      <TkTabHeaderList>
                        <TkTabHeader>帮助</TkTabHeader>
                        <TkTabHeader>API</TkTabHeader>
                        <TkTabHeader>介绍</TkTabHeader>
                      </TkTabHeaderList>
                      <TkTabContentList>
                        <TkTabContent>帮助内容</TkTabContent>
                        <TkTabContent>API内容</TkTabContent>
                        <TkTabContent>介绍内容</TkTabContent>
                      </TkTabContentList>
                    </TkTab>
                </TkTabContent>
               </TkTabContentList>
             </TkTab>
          </div>
        </div>
      </div>
    </div>
    <aside id="article-toc" role="navigation">
      <div id="article-toc-inner">
        <strong class="sidebar-title">目录</strong>
        <ol class="toc">
          <li class="toc-item toc-level-2">
            <a class="toc-link" href="#组件介绍" appTkAnchor><span class="toc-text">组件介绍</span></a>
          </li>
          <li class="toc-item toc-level-2">
            <a class="toc-link" href="#组件示例" appTkAnchor><span class="toc-text">组件示例</span></a>
          </li>
        </ol>
        <a href="#" id="article-toc-top" appTkAnchor>回到顶部</a>
      </div>
    </aside>
  </div>
</article>
    );
  }
}