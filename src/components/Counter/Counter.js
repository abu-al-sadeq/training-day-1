import { useState } from 'react';


const Counter = () => {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }

    const incrementBy = (value) => {
        setCounter(counter + value);
    }

    return (
        <>
            <h3>Current Counter: {counter}</h3>

            <button onClick={increment}>Increment</button>

            <button onClick={() => { incrementBy(3) }}>Increment By 3</button>
        </>
    );
}

export default Counter;