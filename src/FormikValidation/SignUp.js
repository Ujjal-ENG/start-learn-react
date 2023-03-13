import React, { useState } from 'react';

const SignUp = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });
    const { name, email, password } = user;

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.id]: e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        setUser({
            name: '',
            email: '',
            password: ''
        });
    };
    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold text-center p-5">User SignUp</h1>

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

export default SignUp;
