import React, { useReducer, useState } from 'react';
import { reducer } from './reducer';

const booksData = [
    { id: 1, name: 'Pather Panchali' },
    { id: 2, name: 'Padma Nadir Majhi' },
    { id: 3, name: 'Srikanta' }
];
const Modal = ({ modalText }) => {
    return <p>{modalText}</p>;
};

const UseReducer = () => {
    const [bookName, setBookName] = useState('');

    const [bookState, dispatch] = useReducer(reducer, {
        books: booksData,
        isModalOpen: false,
        modalText: ''
    });

    const onSubmit = (e) => {
        e.preventDefault();
        const newBook = { id: new Date().getSeconds().toString(), name: bookName };
        dispatch({
            type: 'ADD',
            payload: newBook
        });
        setBookName('');
    };

    const removeBook = (id) => {
        dispatch({
            type: 'REMOVE',
            payload: id
        });
    };

    return (
        <div>
            <h3>Book List</h3>

            <form onSubmit={onSubmit}>
                <input type="text" name="bookName" id="bookName" className="border-2 border-black p-2" value={bookName} onChange={(e) => setBookName(e.target.value)} />
                <button type="submit" className="px-4 py-1 rounded font-bold bg-slate-400 m-5 active:px-3 active:py-0">
                    Add Book
                </button>
            </form>

            {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}

            {bookState.books.map((book) => {
                const { id, name } = book;
                return (
                    <li key={id}>
                        {name}
                        <button type="button" onClick={() => removeBook(id)} className="px-4 py-1 rounded font-bold bg-red-600 m-5 active:px-3 active:py-0">
                            Remove Book
                        </button>
                    </li>
                );
            })}
        </div>
    );
};

export default UseReducer;
