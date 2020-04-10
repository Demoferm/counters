import React, {useState} from 'react';
import '../App.css';
import CounterListItem from "./CounterListItem";
import CounterListAddForm from "./CounterListAddForm";

function CounterList(props) {
   // const [counter,setCounter]= useState([0]);

    const createCounter = (e) => {
        let newCounter = props.counter;
        newCounter.push(e);
        // let newCouner = counter.push(e);
        props.setCounter(newCounter);
        console.log(`counter = ${props.counter} NewCounter = ${newCounter}`)
    }
    const Counter2 = props.counter.map( el => <p>Hello!</p>);

    return (
        <div className='col-12'>
            {props.counter.map (el => <p>Hello!</p>)}
           <p>Result: {props.counter.length}
           </p>
            <p>Result2: {Counter2}</p>
            {props.counter}
           <p><button onClick={() => createCounter(1)}>Button
           </button>
               <CounterListAddForm/>
           </p>
        </div>
    );
}

export default CounterList;
