import React, { useCallback, useState } from 'react';
import Message from './HOOKS_USE-MEMO/Message';

const App = () => {
    console.log('App Rendering');
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);

    const onHandleIncrement = useCallback(() => {
        setCount((ps) => ps + 1);
    }, []);
    return (
        <>
            <button onClick={() => setToggle((ps) => !ps)} className="px-4 py-1 bg-black text-white font-bold ">
                {toggle ? 'ON' : 'OFF'}
            </button>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount((ps) => ps + 1)} className="px-4 py-1 bg-black text-white font-bold ">
                Increment
            </button>
            <Message numberOfMessage={count} onHandleIncrement={onHandleIncrement} />
        </>
    );
};

export default App;
