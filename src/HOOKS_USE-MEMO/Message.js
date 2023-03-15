import React, { memo } from 'react';

const Message = () => {
    console.log('Message Rendering');
    return <div>Send 0 Message</div>;
};

export default memo(Message);
