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



export default Renderer;