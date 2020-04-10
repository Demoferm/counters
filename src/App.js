import React, {useState} from 'react';
import './App.css';
import CounterList from "./components/CounterList";


function App() {
    const [counter,setCounter]= useState([0]);
    return (
        <div className='row'>
            <div className='col-12'></div>
            <CounterList counter={counter} setCounter={setCounter}/>
        </div>
    );
}

export default App;
