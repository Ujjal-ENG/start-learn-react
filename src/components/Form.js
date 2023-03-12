import React, { useState } from 'react';

const Form = () => {
    const [change, setChange] = useState({
        name: '',
        email: '',
        password: ''
    });
    const { name, email, password } = change;
    const handleChange = (e) => {
        setChange({
            ...change,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(change);
    };
    return (
        <div>
            <h1 className="text-4xl font-bold p-2 ">Registration</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" className="outline-orange-600 border-2 border-black rounded-md m-5" value={name} onChange={handleChange} />

                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" className="outline-orange-600 border-2 border-black rounded-md m-5" value={email} onChange={handleChange} />

                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" className="outline-orange-600 border-2 border-black rounded-md m-5" value={password} onChange={handleChange} />

                <button type="submit" className="px-5 py-2 bg-violet-500 text-white text-xl font-bold rounded-md">
                    Submit Data
                </button>
            </form>
        </div>
    );
};

export default Form;
