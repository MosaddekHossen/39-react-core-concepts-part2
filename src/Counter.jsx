import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const excrement = () => {
        const result = count - 1
        setCount(result);
    }
    return (
        <div style={{ border: "2px solid yellow" }}>
            <h3>Counter: {count}</h3>
            <button onClick={handleClick}>Add</button>
            <button onClick={excrement}>Reduce</button>
        </div>
    )
}