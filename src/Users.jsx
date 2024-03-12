import './Users.css'
import { useEffect, useState } from "react";
import Friend from "./Friend";

export default function Users(){
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(data => setUsers(data))
    },[])

    return(
        <div className='box'>
            <h3 >Users:{users.length}</h3>
            {
                users.map(friend => <Friend friend ={friend}></Friend>)
            }
        </div>
    )
}


// 1.create a state to store the data
// 2.create use effect with no dependencies
// 3.use fetch to load data
