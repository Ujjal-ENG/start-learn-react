import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import AddBlog from '../pages/AddBlog';
import Home from '../pages/Home';

const Index = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-blog" element={<AddBlog />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
};

export default Index;
