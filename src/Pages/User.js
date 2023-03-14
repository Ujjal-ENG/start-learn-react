import React, { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const User = () => {
    const { userid } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const [name, serachName] = useState('');
    const [id, serachId] = useState(0);

    const onSubmit = (e) => {
        e.preventDefault();
        setSearchParams({ name: name, id: id });
    };
    return (
        <div>
            {searchParams.get('id')}
            <br />
            {searchParams.get('name')}
            <form onSubmit={onSubmit}>
                <input type="text" className="border-black border-2" value={name} onChange={(e) => serachName(e.target.value)} />
                <input type="number" className="border-black border-2" value={id} onChange={(e) => serachId(e.target.value)} />
                <button type="submit" className="px-2 bg-black text-white">
                    Add
                </button>
            </form>
        </div>
    );
};

export default User;
