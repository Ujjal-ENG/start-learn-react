import React, { useState } from 'react';
import ComponentB from './ComponentB';
import { UserContext } from './UseContext';

const ComponentA = () => {
    const [user, setUser] = useState({ id: 191002326, name: 'Ujjal Kumar Roy' });
    const [text, setText] = useState('hello I am Text');

    return (
        <UserContext.Provider value={{ user, text }}>
            <ComponentB />
        </UserContext.Provider>
    );
};

export default ComponentA;
