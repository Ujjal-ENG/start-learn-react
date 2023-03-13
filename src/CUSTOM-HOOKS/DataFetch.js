import React from 'react';
import useFetch from './useFetch';

const DataFectch = () => {
    const { data, isLoading } = useFetch('https://jsonplaceholder.typicode.com/todos/');

    return (
        <div>
            {isLoading && <h1 className="text-red-500 font-bold text-2xl">Loading....</h1>}
            {data &&
                data.map((el) => {
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
