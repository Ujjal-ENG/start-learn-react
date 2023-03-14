import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import AddBlog from '../pages/AddBlog';
import Home from '../pages/Home';
import Protected from './Protected';

const Index = () => {
    const [isLoggedIn, setIsLoggegIn] = useState(false);

    const handleLoggIn = () => {
        setIsLoggegIn((ps) => !ps);
    };
    return (
        <div>
            <button className="px-4 py-1 bg-black text-white font-bold" type="submit" onClick={handleLoggIn}>
                {isLoggedIn ? 'Logout' : 'LogIn'}
            </button>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route
                    path="/add-blog"
                    element={
                        <Protected isLoggedIn={isLoggedIn}>
                            <AddBlog />
                        </Protected>
                    }
                />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
};

export default Index;
