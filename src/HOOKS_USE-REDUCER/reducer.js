export const reducer = (state, action) => {
    if (action.type === 'ADD') {
        const allBooks = [...state.books, action.payload];
        return {
            ...state,
            books: allBooks,
            isModalOpen: true,
            modalText: 'Book is added'
        };
    }
    if (action.type === 'REMOVE') {
        const fillterdBook = [...state.books].filter((book) => book.id !== action.payload);

        return {
            ...state,
            books: fillterdBook,
            isModalOpen: true,
            modalText: 'Book is Deleted'
        };
    }
    return state;
};
