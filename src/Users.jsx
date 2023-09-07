import { useEffect, useState } from "react"

export default function Users() {

    const [users, serUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => serUsers(data))
    }, [])

    return (
        <div>
            <h3>Users: {users.length}</h3>
        </div>
    )
}