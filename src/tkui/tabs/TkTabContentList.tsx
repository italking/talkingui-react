import React from "react";

export default class TkTabContentList extends React.Component {
  render(){
    return (
      <div className="tk-tabs-content">
         {this.props.children} 
      </div>
    );
  }
}