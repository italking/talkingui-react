import React from "react";
import events from "events";
import {TkTabContext} from "./TkTab";

export default class TkTabHeader extends React.Component {
  static contextType = TkTabContext;
  emitter
  index:number;
  tid;
  constructor(props){
    super(props);
    this.handClick = this.handClick.bind(this);
  }
  componentDidMount(){
    //初始化消息
    this.emitter = this.context.emitter;
    this.index = this.context.getHindex();
    this.tid = this.context.id;
    
  }
  handClick(){
    this.emitter.emit('tab' , {index:this.index});
  }
  render(){
    return (
      <div className="tk-tabs-header" onClick={this.handClick} >
         {this.props.children} 
      </div>
    );
  }
}