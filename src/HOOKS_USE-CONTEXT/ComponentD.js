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
            <button type="button" onClick={user.switchTheme}>
                {user.theme ? 'Light' : 'Dark'}
            </button>
        </div>
    );
};

export default ComponentD;
