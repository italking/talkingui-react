import React from "react";
import events from "events";
import {TkTabContext} from "./TkTab";

export default class TkTabHeader extends React.Component {
  static contextType = TkTabContext;
  emitter;
  index:number;
  tid;
  li = React.createRef();
  constructor(props){
    super(props);
    this.handClick = this.handClick.bind(this);
    this.state = {
      active:false 
    }
  }
  componentDidMount(){
    //初始化消息
    this.emitter = this.context.emitter;
    this.index = this.context.getHindex();
    this.tid = this.context.id;
    if(this.index === 0){
      this.setState({active:true});
    }
    this.emitter.on("tab" , (message) =>{
      if(this.index !== message.index){
        this.setState({active:false});
      }
    })
    
  }
  handClick(){
    this.setState({active:true});
    this.emitter.emit('tab' , {index:this.index , offsetLeft:this.li.current.offsetLeft , width : this.li.current.offsetWidth});
  }
  render(){
    return (
      <li ref={this.li} class={[this.state.active? 'active': null ]} onClick={this.handClick} >
         <span>{this.props.children}</span> 
      </li>
    );
  }
}