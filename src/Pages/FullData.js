import React from 'react';
import { useLocation } from 'react-router-dom';

const FullData = () => {
    const locaction = useLocation();
    const { title, desc } = locaction.state;
    return (
        <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <h1 className="text-xl font-bold">{desc}</h1>
        </div>
    );
};

export default FullData;
