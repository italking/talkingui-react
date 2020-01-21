import React from "react";
import {TkTabContext} from "./TkTab";
export default class TkTabHeaderList extends React.Component {
  static contextType = TkTabContext;
  wheader = React.createRef();
  header  = React.createRef(); 
  emitter;
  constructor(props) {
    super(props);
    this.state = {
      showBar: false,
      left : 0
    };
  } 
  render() {
    return (
      <div  ref={this.wheader} className="tk-tabs-warpHeader" style={{width:'100%'}}>
        <ul style={{left:(this.state.left * -1)+'px'}}  ref={this.header}>{this.props.children}</ul>
        <span onClick={this.scroll.bind(this, 'l' , 40)} class="scroll-bar l" style={{display: this.state.showBar ? 'inline':'none'}}/>
        <span onClick={this.scroll.bind(this, 'r' , 40)} class="scroll-bar r" style={{display: this.state.showBar ? 'inline':'none'}}/>
      </div>
    );
  }
  componentDidMount(){
    this.emitter = this.context.emitter;
    this.emitter.addListener('tab' , (message)=>{
     this.fixScroll(message.offsetLeft , message.width);
    });
    this.fixScrollbar();
  }
  componentDidUpdate() {
    this.fixScrollbar();
  }

  fixScrollbar() {
    setTimeout(() => {
      if (this.header.current.offsetWidth > this.wheader.current.offsetWidth) {
        if (!this.state.showBar) {
          this.setState({
            showBar: true
          });
        }
      } else {
        if (this.state.showBar) {
          this.setState({ showBar: false });
        }
      }
    }, 1);
  }
  //如果需要显示的tab在非现实区域，移动其到显示区域
  fixScroll(offsetLeft , width ){
    //在右边超出
    if((offsetLeft + width - this.state.left) >= this.wheader.current.offsetWidth ) {
      this.setState({left: this.state.left + (offsetLeft + width - this.state.left  - this.wheader.current.offsetWidth)  });
    //在左边超出
    }else if(offsetLeft - this.state.left < 0){
      this.setState({left: offsetLeft });
    }
  }
  scroll(drc , dis){
    if(drc === 'r'){
      if(this.state.left + dis >= this.wheader.current.offsetWidth){
        this.setState({left:this.wheader.current.offsetWidth});
      }else{
        this.setState({left:this.state.left + dis});
      }
     
    }else{
      if(this.state.left - dis >0){
        this.setState({left: this.state.left - dis});  
      }else{
        this.setState({left: 0});  
      }
    }
  }
}
