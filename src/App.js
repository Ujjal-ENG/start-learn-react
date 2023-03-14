import React from 'react';
import Navbar from './Pages/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
