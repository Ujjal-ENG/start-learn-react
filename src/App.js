import React, { useState } from 'react';
import Message from './HOOKS_USE-MEMO/Message';

const App = () => {
    console.log('App Rendering');
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount((ps) => ps + 1)} className="px-4 py-1 bg-black text-white font-bold active:px-3 active:py-1">
                Increment
            </button>
            <Message />
        </>
    );
};

export default App;
