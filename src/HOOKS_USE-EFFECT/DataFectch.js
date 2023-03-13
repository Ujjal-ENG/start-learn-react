import React, { useEffect, useState } from 'react';

const DataFectch = () => {
    const [todos, setTodos] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetChData = async () => {
            const fetchTodo = await fetch('https://jsonplaceholder.typicode.com/todos/2');
            const data = await fetchTodo.json();
            setTodos(data.title);
            setIsLoading(false);
        };
        fetChData();
    }, []);

    return (
        <div>
            {isLoading && <h1 className="text-red-500 font-bold text-2xl">Loading....</h1>}
            {todos && <h1 className="text-gray-500 font-bold text-2xl">{todos}</h1>}
        </div>
    );
};

export default DataFectch;
