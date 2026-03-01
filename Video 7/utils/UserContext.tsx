import { createContext } from "react";


//this UserContext can be accessed from anywhere in the app; bypassing the problem of prop drilling.
const UserContext= createContext({
  loggedInUser: "Guest"
});

export default UserContext;