import { render, screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

// for toBeInTheDocument
import "@testing-library/jest-dom";

// 'fetch' usedin the body component is not given by JS but rather by browser, we are testing it on jsDom(browser like environment): jest doesnot understand fetch. ==> dummy fetch is made(exactly like how broswer gives)

/*
 * const fetchData = async() => {
 *   const data = await fetch("api_link");

*    const json = await data.json() 
*/

//! mock of above = below. 
//! EXPLANATION

/*
 ? total promises fetch returns = 2
 * 'fetch' returns a promise -> promise returns 'Response' Object inside 'data'.
 * .json() returns a promise -> gives us the data that is then used.
*/


import MOCK_DATA from ".././mocks/resList(API)data.json";


global.fetch = jest.fn(() =>{
  return Promise.resolve({
    json: () =>{
      return Promise.resolve(MOCK_DATA)
    }
  })
});






it("should render Body compponent with Search", async ()=>{

  //render(<Body/>)

  // act is imported bcz there are state changes in the component
  await act(async() => render (
    <BrowserRouter>
      <Body/>
    </BrowserRouter>
  ))

  const serachBtn = screen.getByRole("button", {name: "Search"});

  expect(serachBtn).toBeInTheDocument();
})