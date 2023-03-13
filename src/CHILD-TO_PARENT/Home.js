import React, { useState } from 'react';
import NewTodo from './NewTodo';
import Todos from './Todos';

const dummytodos = ['todo1', 'todo2'];
const Home = () => {
    const [todos, setTodos] = useState(dummytodos);

    const newTodo = (data) => {
        if (todos.includes(data)) {
            alert('Pease add new');
            return;
        }
        setTodos((ps) => [...ps, data]);
    };
    return (
        <div>
            <NewTodo newTodo={newTodo} />
            <Todos todos={todos} />
        </div>
    );
};

export default Home;
