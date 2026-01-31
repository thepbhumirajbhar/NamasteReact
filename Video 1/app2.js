import React from "react";
import ReactDOM from "react-dom/client";
/*
REACT CODE TO GET:
<div id="parent"
   <div id="child"
      <h1> I am the heading </h1>
   </div>
</div>     



React.createElement(object) => while rendering it converts into HTML(that browser understands)


*/




// const parent=React.createElement(
// "div",
// {id:"parent"},
// React.createElement(
//   "div",
//   {id: "child"},
//   React.createElement("h1",{},"I am the heading")
// )
// );

// console.log(parent);           //returns an object

// const root=ReactDOM.createRoot(document.getElementById("root2"));

// root.render(parent);



/*
REACT CODE TO GET:
<div id="parent"
   <div id="child"
      <h1> I am the heading </h1>
      <h2> I an the second heading </h2>
   </div>
</div>     
*/

const parent=React.createElement("div",{id:"parent"},[
   React.createElement("div",{id: "child"},[
      React.createElement("h1",{},"I am the first heading"),
      React.createElement("h2",{},"I am the second heading"),
   ]),
   React.createElement("div",{id: "child2"},[
      React.createElement("h1",{},"I am the first heading"),
      React.createElement("h2",{},"I am the second heading"),
   ]),
   
]);


console.log(parent);           //returns an object

const root2=ReactDOM.createRoot(document.getElementById("root2"));

root2.render(parent); 
