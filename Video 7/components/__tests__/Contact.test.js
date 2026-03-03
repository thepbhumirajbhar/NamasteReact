import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";


test("should load contact us component", () =>{
  
  //! STEP1: render the component to the jsdom
  render(<Contact/>)


  const heading = screen.getByRole("heading");
  

  //Assertion 
  expect(heading).toBeInTheDocument();
})