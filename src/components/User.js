import {useState} from "react"

const User = (props) =>{
    let [count,setCount] = useState(0)
    const {name, place, contact} = props;
    return (
        <div className="user-card">
            <h1>Name: {name}</h1>
            <h2>Place: {place}</h2>
            <h2>Contact: {contact}</h2>
            <h3>Count = {count}</h3>
            <button onClick={()=>{
                count++;
                setCount(count);
            }}>Increment</button>
        </div>
    )
}

export default User;