import User from "./User";
import UserClass from "./UserClass";


const About= () =>{
  return(
    <div>
      <h1>ABOUT US</h1>
      <h2>Get to know about our company</h2>
      <User name={"Bhumi (Functional)"}/>

      <UserClass name={"Bhumi (Class)"}/>
    </div>
  )
}


export default About;