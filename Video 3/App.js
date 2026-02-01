import React from "react";
import ReactDOM from "react-dom/client";


// // 1. React Elements
/* 
* react.createElement => React element(makes a JS object)
* after rendering JS object => HTML element 
*/


const heading=React.createElement("h1",{id:"heading"},"I am the heading");

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);   


//--------------------------------------------------------------------------------------------------------------------

// // 2. INTRO TO JSX: it is Js syntax => easier to create elements, lets you write *HTML-like code* directly inside your JavaScript files.
/* 
* JS engine does not understand code in JSX---> parcel/@babel (transpile the code b4 it reaches JS Engine)
************
* JSX => react.createElement (transpiled into react element)
* react.createElement => React element(makes a JS object)
* after rendering JS object => HTML element 
*/ 


const jsxHeading= <h1 id="jsxHeading">Hiii in JSX Syntax</h1>;           //!if multiple lines use () to wrap up

const root2=ReactDOM.createRoot(document.getElementById("root2"));

root2.render(jsxHeading); 

//--------------------------------------------------------------------------------------------------------

// //3. React Component
/*
* 2 ways to create component: class based component(old way), functional component(now used)
*/


//* FUNCTIONAL COMPONENT: function that returns some sort of jsx
const HeadingComponent= () => (                                      //! use () agar return nhi likhna ho instead of {}
  <div id="container">
     <h1>Functional component starts with a Capital letter</h1>
  </div>                                     
  
);

const root3=ReactDOM.createRoot(document.getElementById("root3"));

root3.render(<HeadingComponent />);


//------------------------------------------------------------------------------------------------------------


// //4. Component Composition

const Heading1= ()=>(
  <h1>
    heading 1
  </h1>
);

const Heading2= ()=>(
  <div>
    <Heading1 />                      {/* component inside component */}
    <Heading1></Heading1>             {/* component inside component-Syntax 2 */}
    {Heading1()}                      {/*functional compo=JS func...hence called inside {} as a function-Syn 3 */}
    {heading}                         {/* element inside component */}
    <h1>
     Heading 2
    </h1>
  </div>
)


const root4=ReactDOM.createRoot(document.getElementById("root4"))

root4.render(<Heading2 />);