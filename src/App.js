import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Navbar from './PROTECTED_ROUTING/layout/Navbar';

import Index from './PROTECTED_ROUTING/routing/Index';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Index />
            </BrowserRouter>
        </>
    );
};

export default App;
