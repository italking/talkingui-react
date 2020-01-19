import React from "react";
import uuid from  "uuid";
import events from "events";
export const TkTabContext = React.createContext(null);

export default class TkTab extends React.Component {
  id: string;
  hindex = 0;
  cindex = 0;
  tkContext;
  constructor(props){
    super(props);
    this.id = uuid.v4();
    this.tkContext = {
      id: this.id,
      getCindex:()=>{
        return this.cindex++;
      },
      getHindex:()=>{
        return this.hindex++;
      },
      emitter: new events.EventEmitter()
    }
  }

  render(){
    return (
      <TkTabContext.Provider value={this.tkContext}>
        <div className="tk-tabs">
          {this.props.children} 
        </div>
      </TkTabContext.Provider>
    );
  }
}