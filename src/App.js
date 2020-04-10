import React, {useState} from 'react';
import './App.css';
import CounterList from "./components/CounterList";


function App() {

    //const [counter,setCounter]= useState([]);

    return (
        <div className='row'>
            <div className='col-12'></div>
            <CounterList/>
        </div>
    );
}

export default App;
