import React from 'react';

const Child = ({ handleChildData }) => {
    const data = 'I am from child Components';
    handleChildData(data);
    return <div>Child</div>;
};

export default Child;
