import React from "react";

export default class TkTabContentList extends React.Component {
  render(){
    return (
      <div className="tk-tabs-content-list">
         {this.props.children} 
      </div>
    );
  }
}