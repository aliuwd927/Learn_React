// Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    return <div><h1>Hi There!</h1></div>;
};

//Take the react component and hosw it on the screen
ReactDOM.render(
        <App />,
    document.getElementById('root')
);