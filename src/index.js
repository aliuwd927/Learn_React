// Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';


// Create a react component
const App = () => {
    const buttonText = {text: 'Click Me'};
    const labelText = 'Enter Name:'
    return (
        <div>
            <label className='label' for='name'> 
            {labelText}
            </label>
            <input id='name' type='text'/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                 {buttonText.text}
            </button>
        </div>
    );
};

//Take the react component and hosw it on the screen
ReactDOM.render(
        <App />,
    document.getElementById('root')
);