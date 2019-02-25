import React, { Component } from 'react';
import {getDataFromServices, updateConfig} from './api.js';

function HocFunc(WrappedComponent) {
    return class extends Component {
    getData = (data, identifiers) => {
        return getDataFromServices(data, identifiers);
    };
    render() {
        return (
              <div className="widget-shell" key={this.props.input.id}>
                  <WrappedComponent config={this.props.input} getData={this.getData}/>
              </div>
        )
      }
  };
}

function HocOuterControls(WrappedComponent, input) {
        return class extends Component {
            editWidgetConfig = () => {
                return updateConfig(input.widgetType, 'editConfig', input);
            };
            render() {
                return (
                      <div className="widget-controls" key={input.id}>
                          <div className="title"> {input.title} </div>
                          <WrappedComponent input={input}/>
                          <button className="edit-button" onClick={this.editWidgetConfig}> Config Changed </button>
                      </div>
                )
            }
        };
}
export {HocFunc, HocOuterControls};