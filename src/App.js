import React, { Component } from 'react';
import {MyJobs, JobQuestions} from './widgets.js'
import {getConfigs} from "./api";
import {HocFunc, HocOuterControls} from "./hoc.js";
import './App.css';

class App extends Component {

  getWidgetComponent = (type) => {
      const typeToComponent = {'myJobs': MyJobs, 'jobQuestions': JobQuestions};
      return typeToComponent[type]
  };

  widgetIzer = (dataArray) => {
      return dataArray.map(widgetData =>
          HocOuterControls(HocFunc(this.getWidgetComponent(widgetData.widgetType)), widgetData)
      )
  };
  render() {
    const widgets = getConfigs();
    const WidgetComponents = this.widgetIzer(widgets);

    return (
      <div className="App">
        <header className="App-header">
            My name is react tutor
        </header>
        <div className="WidgetPen">
            {WidgetComponents.map(Widget => <Widget/>)}
        </div>
          <footer className="App-footer">
          </footer>
      </div>
    );
  }
}

export default App;
