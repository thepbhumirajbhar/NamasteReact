/*
React Code to get:
<div id="parent"
   <div id="child"
      <h1> I am the heading </h1>
   </div>
</div>     
*/

const parent=React.createElement(
"div",
{id:"parent"},
React.createElement(
  "div",
  {id: "child"},
  React.createElement("h1",{},"I am the heading")
)
);

console.log(parent);           //returns an object

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);