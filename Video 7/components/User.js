import { useState } from "react";


const User= (props) =>{

  const[count,setCount] = useState(0)
  // const[count2,setCount2] = useState(1)

  return (
    <div className="user-card">
      <h2>Name: {props.name}</h2>
      <h3>Location: Delhi</h3>
      <h3>Contact info: @bhumirajbhar</h3>
      <h2>Count: {count}</h2>
      <button 
        onClick={()=>{
          setCount(count+1)
        }}>
        Count Updater
      </button>
      {/* <h2>Count- 2: {count2}</h2> */}
    </div>
  )
}

export default User;