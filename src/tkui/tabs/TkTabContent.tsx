import React from "react";
import events from "events";
import {TkTabContext} from "./TkTab";

export default class TkTabContent extends React.Component {
  static contextType = TkTabContext;
  emitter
  index:number;
  tid;
  constructor(props){
    super(props)
    this.state = {show:false}
  }

  componentDidMount(){
    //初始化消息
    this.emitter = this.context.emitter;
    this.index   = this.context.getCindex();
    if(this.index === 0){
      this.setState({show:true});
    }
    this.tid     = this.context.id;
    this.emitter.addListener('tab' , (message)=>{
      this.toggle(message);
    });
  }

  toggle(message){
    if(message.index === this.index){
        this.setState({show:true})
    }else{
        this.setState({show:false});
    }
  }

  render(){
    const show = this.state.show;
    return (
      <>
      {show && 
        (<div className='tk-tabs-content-element'>
          {this.props.children} 
        </div>)
      }
      </>
    );
  }
}