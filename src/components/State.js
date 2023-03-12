import React, { Component } from 'react';

export default class State extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    };
    render() {
        return (
            <div>
                <h1> CountValueis: {this.state.count}</h1>
                <button className="p-2 m-5 bg-red-500 cursor-pointer" type="button" onClick={this.increment}>
                    +
                </button>
            </div>
        );
    }
}
