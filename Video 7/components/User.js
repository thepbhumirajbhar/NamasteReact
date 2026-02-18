import { useState } from "react";


const User= (props) =>{

  const[count,setCount] = useState(0)

  return (
    <div className="user-card">
      <h2>Name: {props.name}</h2>
      <h3>Location: Delhi</h3>
      <h3>Contact info: @bhumirajbhar</h3>
      <h2>Count: {count}</h2>
    </div>
  )
}

export default User;