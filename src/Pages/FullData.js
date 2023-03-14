import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { blogsData } from './blogsData';

const FullData = () => {
    const { title } = useParams();
    const [data, setData] = useState();
    useEffect(() => {
        const filteredData = blogsData.find((el) => el.title === title);
        setData(filteredData.desc);
    }, [title]);

    return (
        <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <h1 className="text-xl font-bold">{data}</h1>
        </div>
    );
};

export default FullData;
