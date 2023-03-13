import React, { useEffect, useState } from 'react';

const Search = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');
    const handleChange = (e) => {
        setSearchText(e.target.value);
    };
    useEffect(() => {
        onSearch(searchText);
    }, [searchText]);
    return (
        <div className="max-w-3xl mx-auto">
            <input
                type="text"
                name="name"
                id="name"
                className="outline-orange-600 border-2 border-black rounded-md p-2 text-center m-5 w-full"
                value={searchText}
                onChange={handleChange}
                placeholder="Search Your Desired Country"
            />
        </div>
    );
};

export default Search;
