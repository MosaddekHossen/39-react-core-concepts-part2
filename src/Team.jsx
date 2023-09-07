import { useState } from "react"

export default function Team() {
    const [team, player] = useState(11);
    const add = () => {
        const sum = team + 1;
        player(sum);
    }
    const remove = () => {
        // const result = team - 1;
        player(team - 1);
    }
    const TeamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
    return (
        <div style={TeamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={add}>Add</button>
            <button onClick={remove}>Remove</button>
        </div>
    )
}