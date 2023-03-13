import React from 'react';
import ComponentC from './ComponentC';

const ComponentB = ({ user }) => {
    return (
        <div>
            <ComponentC user={user} />
        </div>
    );
};

export default ComponentB;
