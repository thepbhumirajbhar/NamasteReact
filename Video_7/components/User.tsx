import { useEffect, useState } from "react";

type UserProps={
  name: string;
}



const User = (props: UserProps) =>{
  const[count,setCount] = useState<number>(0)

  // const[count2,setCount2] = useState(1)

  useEffect(()=>{
    //API call
    const timer= setInterval(() =>{
      console.log("until yo put a return statement i will keep running in the bg evn if you leave the page")
    },1000);

    return() =>{
      clearInterval(timer)
      //* this return part is called when you switch the page
      //* used to clear the mess once you leave the page.
    }
  },[])



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