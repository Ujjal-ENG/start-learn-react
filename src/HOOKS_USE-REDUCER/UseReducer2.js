import React, { useReducer, useState } from 'react';

const booksData = [
    { id: 1, name: 'Pather Pachali' },
    { id: 2, name: 'Srikant' },
    { id: 3, name: 'Padma Nadir Majhi' }
];

const Modal = ({ modalText }) => {
    return <h3 className="text-xl font-bold text-red-600">{modalText}</h3>;
};

const reducer = (state, action) => {
    if (action.type === 'ADD') {
        const allBooks = [...state.books, action.payload];
        return {
            ...state,
            books: allBooks,
            modalText: 'Books is Added!!',
            isModalOpen: true
        };
    }
    if (action.type === 'Remove') {
        const filteredBook = [...state.books].filter((el) => el.id !== action.payload);

        return {
            ...state,
            books: filteredBook,
            modalText: 'Book is deleted!!',
            isModalOpen: true
        };
    }
};

const UseReducer2 = () => {
    const [newBook, setNewBook] = useState('');

    const [bookstate, dispatch] = useReducer(reducer, {
        books: booksData,
        modalText: '',
        isModalOpen: false
    });

    const onSubmit = (e) => {
        e.preventDefault();
        const newBooks = { id: new Date().getSeconds().toString(), name: newBook };
        dispatch({
            type: 'ADD',
            payload: newBooks
        });
        setNewBook('');
    };

    const removeBook = (id) => {
        dispatch({
            type: 'Remove',
            payload: id
        });
    };

    return (
        <div>
            <h1 className="text-2xl font-bold">Book List</h1>
            <form onSubmit={onSubmit}>
                <input type="text" className="border-black border-2 m-2 outline-orange-600 p-2 " placeholder="Enter your Book Name" value={newBook} onChange={(e) => setNewBook(e.target.value)} />
                <button type="submit" className="font-bold px-4 py-1 rounded bg-violet-600 text-white active:px-3 active:py=0">
                    Add Book
                </button>
            </form>
            {bookstate.isModalOpen && <Modal modalText={bookstate.modalText} />}
            {bookstate.books &&
                bookstate.books.map((el) => {
                    return (
                        <h4 className="text-xl font-bold" key={el.id}>
                            {' '}
                            {el.id}: {el.name}
                            <button type="button" className="font-bold px-4 py-1 rounded bg-violet-600 text-white active:px-3 active:py=0 mx-7 my-5" onClick={() => removeBook(el.id)}>
                                Remove Book
                            </button>
                        </h4>
                    );
                })}
        </div>
    );
};

export default UseReducer2;
