import React from "react";
import ReactDOM from "react-dom/client";

//1. React Elements
const heading=React.createElement("h1",{id:"heading"},"I am the heading");

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);    

//2. INTRO TO JSX: it is Js syntax => easier to create elements, lets you write *HTML-like code* directly inside your JavaScript files.

const jsxHeading=<h1 id="jsxHeading">Hiii in JSX Syntax</h1>
const root2=ReactDOM.createRoot(document.getElementById("root2"));

root2.render(jsxHeading); 
