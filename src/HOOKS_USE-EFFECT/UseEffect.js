import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('UseEffect');
    }, []);

    return (
        <div className="p-10">
            {console.log('rendering')}
            <p className="text-2xl font-bold">count: {count}</p>
            <button type="button" className="p-2 bg-slate-500" onClick={() => setCount((ps) => ps + 1)}>
                +
            </button>
        </div>
    );
};

export default UseEffect;
