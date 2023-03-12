import React, { useState } from 'react';

const CountState = (e) => {
    const [count, setCount] = useState(0);
    const handleICR = () => {
        setCount((ps) => ps + 1);
    };
    const handleDCR = () => {
        setCount((ps) => ps - 1);
    };
    return (
        <div>
            <h1 className="text-2xl text-purple-600 font-bold">
                Count: <span className="text-black">{count}</span>
            </h1>

            <button
                type="button"
                className="px-5 py-2 rounded-md bg-violet-700 text-white font-bold text-xl cursor-pointer m-10 active:px-4 active:py-1"
                onClick={handleICR}
                disabled={count === 10 ? true : false}>
                Increment
            </button>
            <button
                type="button"
                className="px-5 py-2 rounded-md bg-violet-700 text-white font-bold text-xl cursor-pointer m-10 active:px-4 active:py-1"
                onClick={handleDCR}
                disabled={count === 0 ? true : false}>
                Decrement
            </button>
        </div>
    );
};

export default CountState;
