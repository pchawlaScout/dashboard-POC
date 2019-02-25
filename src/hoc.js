import React, { Component } from 'react';
import {getDataFromServices, updateConfig} from './api.js';

function HocFunc(WrappedComponent, input) {
    //state (editing etc)
    return class extends Component {
    editConfig = (identifiers, config) => {
        return updateConfig(identifiers, config);
    };
    getData = (data, identifiers) => {
        return getDataFromServices(data, identifiers);
    };
    render() {
        return (
              <div className="widget-shell" key={input.id}>
                  <div className="title"> {input.title} </div>
                  <WrappedComponent config={input} editConfig={this.editConfig} getData={this.getData}/>
              </div>
        )
      }
  };

}
export default HocFunc;