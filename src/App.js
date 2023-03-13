import React from 'react';

import Child from './CHILD-TO_PARENT/Child';

const App = () => {
    const handleChildData = (childData) => {
        console.log(childData);
    };
    return (
        <>
            <Child handleChildData={handleChildData} />
        </>
    );
};

export default App;
