import React from 'react';

function Todo() {
    return React.createElement('div', {}, React.createElement('p', {}, 'Todo TItle'));
}
function Todo2() {
    return (
        <>
            <div>
                <p>Todo TItle 2</p>
                <p>Todo TItle 3</p>
            </div>
        </>
    );
}
const App = () => {
    return (
        <>
            <Todo />
            <Todo2 />
        </>
    );
};

export default App;
