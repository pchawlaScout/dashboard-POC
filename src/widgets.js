import React, { Component } from 'react';

class MyJobs extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        let data = this.props.getData({}, 'getJobs');
        this.setState({count: data.count});
    }

    render() {
        return (
            <div>
                {this.state.count &&
                    <p>Count: {this.state.count}</p>
                }
            </div>
        );
    }

}

class JobQuestions extends Component{
    constructor(props) {
        super(props);
        this.state = {
            question: 0
        };
    }
    componentDidMount() {
        let data = this.props.getData({}, 'getQuestions');
        this.setState({question: data.question});
    }

    render() {
        return (
            <div>
                {this.state.question &&
                <p>question: {this.state.question}</p>}
            </div>
        );
    }

}
export {MyJobs, JobQuestions}