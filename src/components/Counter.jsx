import { useState } from "react";
import "../style.css"

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {setCount(count + 1)};
    const decrement = () => {setCount(count - 1)};

    return(
        <main>
            <div className="container">
                <h1 className="number">{count}</h1>
            </div>

            <div className="btns-container">
                <button onClick={increment} className="increment">+</button>
                <button onClick={decrement} className="decrement">-</button>
            </div>
        </main>
    )
}

export default Counter;