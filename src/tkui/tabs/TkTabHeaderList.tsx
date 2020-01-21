import React from "react";

export default class TkTabHeaderList extends React.Component {
  wheader;
  header;
  constructor(props){
    super(props);
    this.state = {
      showBar :false
    };
  }
  render(){
    return (
      <div ref = {this.wheader} className="tk-tabs-warpHeader">
        <ul ref = {this.header} >
          {this.props.children} 
        </ul>
      </div>
    );
  }

  componentDidUpdate(){
    alert(2);
    if(this.header.offsetWidht > this.wheader.offsetWidht){
      if(!this.state.showBar){
        this.setState({
          showBar:true
        });
      }
    }else{
      alert(1)
      if(this.state.showBar){
        this.setState({showBar:false})
      } 
    }
  }
}