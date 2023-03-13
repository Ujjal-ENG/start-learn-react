import React, { useState } from 'react';
import ComponentB from './ComponentB';

const ComponentA = () => {
    const [user, setUser] = useState({
        id: 191002326,
        name: 'Ujjal Kumar Roy'
    });
    return (
        <div>
            <ComponentB user={user} />
        </div>
    );
};

export default ComponentA;
