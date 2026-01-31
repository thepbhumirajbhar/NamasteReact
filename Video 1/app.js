const heading=React.createElement("h1",
  {
    id:"heading",xyz:'abc'
  },"Hello From React..!!")

console.log(heading)    //returns an object 

const reactRoot=ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(heading); 



