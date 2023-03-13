import React from 'react';
import Cards from './CountryAPP/Cards';

import useFetch from './CUSTOM-HOOKS/useFetch';

const App = () => {
    const { data, isLoading } = useFetch('https://restcountries.com/v3.1/all');

    return (
        <>
            {isLoading && <h1>Data Is Loading...</h1>}
            <Cards datas={data} />
        </>
    );
};

export default App;
