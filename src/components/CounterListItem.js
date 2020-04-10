import React from 'react';
import '../App.css';


function CounterListItem(props) {
    return (
        <p>{props.counter.name}: <button>Test</button></p>
    );
}

export default CounterListItem;
