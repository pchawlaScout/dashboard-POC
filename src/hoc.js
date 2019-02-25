import React, { Component } from 'react';
import {getDataFromServices, updateConfig} from './api.js';

function LoaderHOC(WrappedComponent) {
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

function HocOuterControls(WrappedComponent, input, operations) {
        return class extends Component {
            editWidgetConfig = () => {
                return updateConfig(input.widgetType, 'editConfig', input);
            };
            handleClose = () => {
                operations.close(input.id);
            };
            render() {
                return (
                      <div className="widget-controls" key={input.id}>
                          <div className="title"> {input.title} </div>
                          <WrappedComponent input={input}/>
                          <button className="edit-button" onClick={this.editWidgetConfig}> Config Changed </button>
                          <button className="close-button" onClick={this.handleClose}>Close</button>
                      </div>
                )
            }
        };
}
export {LoaderHOC, HocOuterControls};