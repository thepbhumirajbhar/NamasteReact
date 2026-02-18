import User from "./User";
import UserClass from "./UserClass";


const About= () =>{
  return(
    <div>
      <h1>ABOUT US</h1>
      <h2>Get to know about our company</h2>
      <User name={"Bhumi (Functional)"}/>

      <UserClass name={"Bhumi (Class)"}         
                 location={"Delhi (Class)"}/>

      <UserClass name={"Kyu Btau"}
                 location={"yahi kahi pass m"}/>
    </div>
  )
}


export default About;