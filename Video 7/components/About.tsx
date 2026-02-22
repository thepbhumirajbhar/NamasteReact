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
* When the component is mounted(Mounting Phase), its mounted in 2 phases:
! 1. Render phase: Constructor call + Render call
! 2. Commit phase: DOM update + ComponentDidMount call

* React tries to batch up these 2 phases(makes react FAST) because manipulating DOM is really very expensive

- Parent Constrcutor
- Parent render
      - First Constructor
      - First Render

      - Second Constuctor
      - second Render

    <DOM UPDATED- IN A SINGLE BATCH>
    - Child 1 ComponentDidMount
    - Child 2 ComponentDidMount

- Parent componentdidmount

*/

//! Use case of ComponentDidMount: to call api 
