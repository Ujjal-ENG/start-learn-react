import React, { Component } from 'react';

export default class ClassHandler extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            text: ''
        };
    }

    changeName = (e) => {
        this.setState({
            name: this.state.name,
            text: e.target.value
        });
    };

    render() {
        return (
            <div>
                <input type="text" name="name" className="m-10 bg-gray-400 p-2 rounded-md focus:outline-orange-600" onChange={this.changeName} />
                <button className="bg-violet-600 px-4 py-1 text-xl font-bold text-white rounded-lg cursor-pointer">ADD ME</button>
                <h1>{this.state.name}</h1>
                <p>{this.state.text.trim().includes('.js') ? 'Mama js shekha agea tarpor eita shekh' : this.state.text.trim()}</p>
            </div>
        );
    }
}
