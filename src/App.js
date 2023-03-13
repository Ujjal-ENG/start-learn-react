import React from 'react';

import Child from './CHILD-TO_PARENT/Child';
import Todo from './CHILD-TO_PARENT/Todo';

const App = () => {
    const handleChildData = (childData) => {
        console.log(childData);
    };
    const handleTodoData = (childData) => {
        console.log(childData);
    };
    return (
        <>
            <Child handleChildData={handleChildData} />
            <Todo handleTodoData={handleTodoData} />
        </>
    );
};

export default App;
