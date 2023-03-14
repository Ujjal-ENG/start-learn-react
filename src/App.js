import React from 'react';
import Navbar from './Pages/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import FullData from './Pages/FullData';
import User from './Pages/User';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:title" element={<FullData />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/user" element={<User />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
