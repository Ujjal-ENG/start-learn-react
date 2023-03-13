import React, { useRef } from 'react';

const UserForm = () => {
    const userNameRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userName = userNameRef.current.value;
        console.log(userName);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" className="outline-orange-600 border-2 border-black rounded-md m-5" ref={userNameRef} />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" className="outline-orange-600 border-2 border-black rounded-md m-5" />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" className="outline-orange-600 border-2 border-black rounded-md m-5" />
                    <button type="submit" className="px-5 py-2 bg-violet-500 text-white text-xl font-bold rounded-md">
                        Submit Data
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserForm;
