import React, {useState} from 'react';
import '../App.css';
import CounterListItem from "./CounterListItem";
import CounterListAddForm from "./CounterListAddForm";

function CounterList(props) {
    const [counter, setCounter] = useState([]);

    const addCounter = (e) => {
        setCounter([...counter,e]);



        // let newCounter = counter;
        // newCounter.push(e);
        // // let newCouner = counter.push(e);
        // setCounter(newCounter);//map(el => <p>{el}</p>));
        //props.setCounter();
        //console.log(`counter = ${counter} NewCounter = ${newCounter}`);
        // const Counter2 = props.counter.map( el => <p>Hello!</p>);
    }

    const deleteCounter = () => {
        let newCounter = [...counter];
        newCounter.pop();// let newCouner = counter.push(e);
        setCounter(newCounter);
        //props.setCounter();
        //console.log(`counter = ${counter} NewCounter = ${newCounter}`);
        // const Counter2 = props.counter.map( el => <p>Hello!</p>);
    }

    return (
        <div className='col-12'>
            {/*{props.counter.map (el =><p>{el}</p>)}*/}
            {console.log(`counter = ${counter}`)}
            <p>Final Tasks: {counter.length}
            </p>
            {/*<CounterListItem counter={counter}/>*/}
            {counter.map (el => <CounterListItem counter={el}/>)}
            <p>
                <h3>Add a new task:</h3>
                <input type='text' id='counterName' placeholder='Counter Name'></input>
                <input type='text' id='startNumber' placeholder='Start Number'></input>
                <button onClick={() => addCounter({
                    name: document.getElementById('counterName').value,
                    startNumber: document.getElementById('startNumber').value,
                })}>Add
                </button>
            </p>
            <p>
                <button onClick={() => deleteCounter()}>Delete
                </button>
            </p>
            <p>
                <CounterListAddForm/>
            </p>
        </div>
    );
}

export default CounterList;
