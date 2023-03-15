import React, { memo } from 'react';

const Message = ({ numberOfMessage, onHandleIncrement }) => {
    console.log('Message Rendering');
    return (
        <div>
            <p> Send {numberOfMessage} Message</p>
            <button className="px-4 py-1 bg-black text-white font-bold " onClick={onHandleIncrement}>
                Send Message
            </button>
        </div>
    );
};

export default memo(Message);
