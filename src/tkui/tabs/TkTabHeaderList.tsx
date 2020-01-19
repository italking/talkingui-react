import React from "react";

export default class TkTabHeaderList extends React.Component {
  render(){
    return (
      <div className="tk-tabs-header-list">
         {this.props.children} 
      </div>
    );
  }
}