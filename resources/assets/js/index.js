import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Elements from './components/Elements';
import Example from './components/Example';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

export default class Index extends Component {
    render() {
        return (
            <div className="container">
                <Router>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/example">Example</Link>

                        <Route path="/" component={Elements}/>
                        <Route path="/example" component={Example}/>
                    </div>
                </Router>
            </div>
        );
    }
}

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
