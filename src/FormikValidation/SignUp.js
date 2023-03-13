import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
const SignUp = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: yup.object({
            name: yup.string().min(3, 'Name must have at least 3 char and maximum 30 char').max(30).required(),

            email: yup.string().email().required(),
            password: yup.string().min(6, 'Password Must have atleast 6 charracters')
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm({ values: '' });
        }
    });

    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold text-center p-5">User SignUp</h1>

            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" className="outline-orange-600 border-2 border-black rounded-md m-5" value={formik.values.name} onChange={formik.handleChange} />
                {formik.errors.name && <span className="text-red-600">{formik.errors.name}</span>}

                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" className="outline-orange-600 border-2 border-black rounded-md m-5" value={formik.values.email} onChange={formik.handleChange} />
                {formik.errors.email && <span className="text-red-600">{formik.errors.email}</span>}

                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="outline-orange-600 border-2 border-black rounded-md m-5"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
                {formik.errors.password && <span className="text-red-600">{formik.errors.password}</span>}

                <button type="submit" className="px-5 py-2 bg-violet-500 text-white text-xl font-bold rounded-md">
                    Submit Data
                </button>
            </form>
        </div>
    );
};

export default SignUp;
