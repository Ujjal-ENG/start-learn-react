import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetChData = async () => {
            const fetchTodo = await fetch(url);
            const data = await fetchTodo.json();
            setData(data);
            setIsLoading(false);
        };
        fetChData();
    }, [url]);
    return { data, isLoading };
};

export default useFetch;
