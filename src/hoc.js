import React, { Component } from 'react';

function HocFunc(WrappedComponent, input) {
    //config save callback
    //state (editing etc)
    //styling
    //get data
    return class extends Component {
    editConfig = () => {
        console.log('blah')
    };
    render() {
        return (
              <div className="widget-shell" key={input.id}>
                  <div className="title"> {input.title} </div>
                  <WrappedComponent config={input} configChanges={this.editConfig}/>
              </div>
        )
      }
  };

}
export default HocFunc;