import { useRouteError } from "react-router-dom";
//* hook provided by react router library: gives more info about the error, that info then further can be shown to the user.


const Error=() =>{
  const err= useRouteError();
  console.log(err)
  return(
    <div>
      <h1>OOPS..!</h1>
      <h2>Something went wrong...</h2>
      <h3> {err.status}: {err.statusText}</h3>
    </div>
  )
}

export default Error;