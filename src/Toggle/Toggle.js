import React, { useState } from 'react';

const Toggle = ({ data }) => {
    const [toggle, setToggle] = useState(false);
    const handleChang = () => {
        setToggle((ps) => !ps);
    };
    return (
        <div className="transition-all ease-in-out">
            <h1>{data}</h1>
            {toggle && (
                <h1 className="transition">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil expedita magnam adipisci a repellendus deleniti optio perferendis cum repudiandae!</h1>
            )}
            <button type="button" className="px-5 py-2 bg-violet-600 text-white font-bold text-xl transition" onClick={handleChang}>
                {toggle ? 'Hide' : 'Show'}
            </button>
        </div>
    );
};

export default Toggle;
