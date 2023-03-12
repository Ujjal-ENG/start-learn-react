import React, { Component } from 'react';
import Home from './Home';
import Login from './Login';

export default class SignIN extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: true
        };
    }
    render() {
        return <div>{this.state.isLoggedIn ? <Home /> : <Login />}</div>;
    }
}
