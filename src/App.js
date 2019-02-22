import React, { Component } from 'react';
import {Renderer, MyJobs, JobQuestions} from './widgets.js'
import HocFunc from './hoc.js'
import './App.css';

class App extends Component {

  getWidgetComponent = (type) => {
      const typeToComponent = {'myJobs': MyJobs, 'jobQuestions': JobQuestions};
      return typeToComponent[type]
  };

  widgetIzer = (dataArray) => {
      return dataArray.map(widgetData =>
          HocFunc(this.getWidgetComponent(widgetData.widgetType), widgetData))
  };
  render() {
    const widgets = [
        {widgetType: 'myJobs', title:'you got a job', id: 1, count: 2},
        {widgetType: 'myJobs', title:'you got a job', id: 2, count: 3},
        {widgetType: 'myJobs', title:'you got a job', id: 3, count: 4},
        {widgetType: 'myJobs', title:'you got a job', id: 4, count: 5},
        {widgetType: 'myJobs', title:'you got a job', id: 5, count: 6}
        ];
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
