import React, {lazy, Suspense, useState, useEffect}from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";  
import Body from "./components/Body";

import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"; 

//* createBrowserRouter tells When the URL looks like this, show that component.
//* RouterProvider provides the routing configuration that we have create to our app.
/* 
! Outlet is the component given to us, it fills itself according to the path.
*/


import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery"
import UserContext from "./utils/UserContext";


// chunking grocery component
const Grocery= lazy(()=>import("./components/Grocery"))




const AppLayout= () => {

  const [userName, setUserName] = useState(" ");

  //authentication
  useEffect(()=>{
    //Make an API call and send username and pswd
    const data={
      userName: "Bhumi Rajbhar"
    };

    setUserName(data.userName)
  },[])




  return (
    //basically changing userName from any where in the app by passing setUserName=>(binded state variable to the context )
    <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
      <div className="app">
      <Header/>
      <Outlet />
 
    </div>
    </UserContext.Provider>
    
  )
}

const appRouter=createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: < Error />,
    children: [
    {path:"/",
     element:<Body />
    },
    {
    path: "/about", 
    element: <About />,
    },
    {
    path: "/contact",
    element: <Contact />,
    },
    {
    path: "/grocery",
    element: <Suspense fallback={<h1>Loadingg...</h1>}>
            <Grocery />
        </Suspense>,
    },
    {
    path: "/restaurant/:resId",              
    element: <RestaurantMenu />,
    }
  ]
  },
  
])
 { /* /: makes the path dynamic*/ }


const root=ReactDOM.createRoot(document.getElementById("root")!)

//root.render(<AppLayout/>)
root.render(< RouterProvider router={appRouter} />)