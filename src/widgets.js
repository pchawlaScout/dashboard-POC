import React, { Component } from 'react';

class Renderer extends Component{
        render(){
            return (
                 <div>
                    <p>{this.props.config['title']}</p>
                    <p>{this.props.config['id']}</p>
                    <p>{this.props.config['count']}</p>
                 </div>
            )
        }
}

class MyJobs extends Component{
    render() {
        return (
            <div>
                <p
                onClick={this.props.configChanges}>Count: {this.props.config.count}</p>
            </div>
        );
    }

}

class JobQuestions extends Component{
    render() {
        return (
            <div>

            </div>
        );
    }

}
export {Renderer, MyJobs, JobQuestions}