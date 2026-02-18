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

/*
* React tries to batch up the task because manipulating DOM is really very expensive

- Parent Constrcutor
- Parent render
      - First Constructor
      - First Render

      - Second Constuctor
      - second Render

    <DOM UPDATED- IN A SINGLE BATCH>
    - Child 1 componentdidmount
    - Child 2 componentdidmount

- Parent componentdidmount

*/
