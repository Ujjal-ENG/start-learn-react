import React, { useState } from 'react';
import Cards from './CountryAPP/Cards';
import Search from './CountryAPP/Search';

import useFetch from './CUSTOM-HOOKS/useFetch';

const App = () => {
    const { data, isLoading } = useFetch('https://restcountries.com/v3.1/all');
    const [filteredData, setFilteredData] = useState(data);

    const removeItem = (ids) => {
        const filtered = filteredData.filter((el) => el.name.common !== ids);
        setFilteredData(filtered);
    };

    const onSearch = (searchValue) => {
        if (data) {
            let value = searchValue.toLowerCase();
            const newCountries = data.filter((el) => {
                const countryName = el.name.common.toLowerCase();
                return countryName.startsWith(value);
            });
            setFilteredData(newCountries);
        }
    };

    return (
        <>
            {isLoading && <h1>Data Is Loading...</h1>}
            <Search onSearch={onSearch} />
            <Cards datas={filteredData} removeItem={removeItem} />
        </>
    );
};

export default App;
