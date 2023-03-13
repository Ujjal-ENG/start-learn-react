import React, { useState } from 'react';
import { useFormik } from 'formik';
const SignUp = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            console.log(values);
        }
    });
    const { name, email, password } = formik;

    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold text-center p-5">User SignUp</h1>

            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" className="outline-orange-600 border-2 border-black rounded-md m-5" value={name} onChange={formik.handleChange} />

                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" className="outline-orange-600 border-2 border-black rounded-md m-5" value={email} onChange={formik.handleChange} />

                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" className="outline-orange-600 border-2 border-black rounded-md m-5" value={password} onChange={formik.handleChange} />

                <button type="submit" className="px-5 py-2 bg-violet-500 text-white text-xl font-bold rounded-md">
                    Submit Data
                </button>
            </form>
        </div>
    );
};

export default SignUp;
