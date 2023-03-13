import React, { useEffect, useState } from 'react';

const DataFectch = () => {
    const [todos, setTodos] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetChData = async () => {
            const fetchTodo = await fetch('https://jsonplaceholder.typicode.com/todos/');
            const data = await fetchTodo.json();
            setTodos(data);
            setIsLoading(false);
        };
        fetChData();
    }, []);

    return (
        <div>
            {isLoading && <h1 className="text-red-500 font-bold text-2xl">Loading....</h1>}
            {todos &&
                todos.map((el) => {
                    return (
                        <h1 key={el.id} className="text-gray-500 font-bold text-2xl">
                            {el.id} : {el.title}
                        </h1>
                    );
                })}
        </div>
    );
};

export default DataFectch;
