import React, { memo, useMemo } from 'react';

const Message = ({ numberOfMessage, onHandleIncrement }) => {
    console.log('Message Rendering');

    const calculatedNumber = useMemo(() => {
        let number = 0;
        for (let i = 0; i < 5000000000; i++) {
            number++;
        }
        return number;
    }, []);
    return (
        <div>
            <h2>Calculated Number is{calculatedNumber}</h2>
            <p> Send {numberOfMessage} Message</p>
            <button className="px-4 py-1 bg-black text-white font-bold " onClick={onHandleIncrement}>
                Send Message
            </button>
        </div>
    );
};

export default memo(Message);
