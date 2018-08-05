import React, { Component } from 'react';
import axios from 'axios';

export default class Elements extends Component {

    constructor(){
        super();
        this.state = {
            elements: []
        }
    }

    componentWillMount(){
        axios.get('/api/element').then(response => {
            this.setState({
                elements: response.data
            });
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        return (
            <div className="container">
                {this.state.elements.map(
                    element => <li>{element.text}</li>
                )}
            </div>
        );
    }
}