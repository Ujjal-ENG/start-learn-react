import React, { memo } from 'react';

const Message = ({ numberOfMessage }) => {
    console.log('Message Rendering');
    return <div>Send {numberOfMessage} Message</div>;
};

export default memo(Message);
