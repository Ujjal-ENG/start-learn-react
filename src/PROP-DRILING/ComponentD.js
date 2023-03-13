import React from 'react';

const ComponentD = ({ user }) => {
    return (
        <div>
            <h1>{user.id}</h1>
            <h1>{user.name}</h1>
        </div>
    );
};

export default ComponentD;
