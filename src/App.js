import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const users = [
    {
        fullName: 'Ujjal kumar Roy',
        age: 23,
        phones: [{ home: '191002326' }, { office: '191002325' }]
    },
    {
        fullName: 'Haoitigo Roy',
        age: 18,
        phones: [{ home: '343233434' }, { office: '342345423' }]
    }
];
const App = () => {
    return (
        <>
            <h1 className="text-3xl font-bold text-center">React App</h1>
            {users.map((el) => (
                <div key={uuidv4()}>
                    <h1>{el.fullName}</h1>
                    <h1>{el.age}</h1>

                    {el.phones.flat().map((el) => (
                        <div key={uuidv4()}>
                            <h1>
                                {Object.keys(el)[0]}
                                {Object.values(el)[0]}
                            </h1>
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
};

export default App;
