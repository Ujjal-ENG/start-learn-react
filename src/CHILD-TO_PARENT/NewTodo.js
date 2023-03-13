import React, { useState } from 'react';

const NewTodo = ({ newTodo }) => {
    const [todo, setTodo] = useState('');

    const submitData = (e) => {
        e.preventDefault();
        newTodo(todo);
    };
    return (
        <div>
            <form onSubmit={submitData}>
                <label htmlFor="todo">Todo</label>
                <input type="text" name="todo" id="todo" className="outline-orange-600 border-2 border-black rounded-md m-5" value={todo} onChange={(e) => setTodo(e.target.value)} />

                <button type="submit" className="px-5 py-2 bg-violet-500 text-white text-xl font-bold rounded-md">
                    Add Todo
                </button>
            </form>
        </div>
    );
};

export default NewTodo;
