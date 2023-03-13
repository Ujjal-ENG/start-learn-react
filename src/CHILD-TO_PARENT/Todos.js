import React from 'react';
import Todo from './Todo';

const Todos = (props) => {
    return (
        <div>
            {props.todos.map((el, i) => (
                <h1 key={i} className="text-xl font-bold text-blue-400">
                    <Todo data={el} />
                </h1>
            ))}
        </div>
    );
};

export default Todos;
