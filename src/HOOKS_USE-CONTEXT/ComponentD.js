import React, { useContext } from 'react';
import { UserContext } from './UseContext';

const ComponentD = () => {
    const user = useContext(UserContext);
    const { id, name } = user.user;
    return (
        <div>
            {id}
            {name}
            {user.text}
        </div>
    );
};

export default ComponentD;
