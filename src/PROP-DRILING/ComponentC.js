import React from 'react';
import ComponentD from './ComponentD';

const ComponentC = ({ user }) => {
    return (
        <div>
            <ComponentD user={user} />
        </div>
    );
};

export default ComponentC;
