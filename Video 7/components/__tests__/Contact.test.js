import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";


//! grouping multiple test cases into a block: describe
describe("ContactUs Page test cases", () => {

    test("should load contact us component", () =>{

      //! STEP1: render the component to the jsdom
      render(<Contact/>)
    
    
      const heading = screen.getByRole("heading");

    
      //Assertion 
      expect(heading).toBeInTheDocument();
    })


    test("should load button inside contactUs component", () =>{


      render(<Contact/>)
    
    
      //const btn = screen.getByRole("button");
    
      //Another way of doing above thing
      const btn = screen.getByText("Submit")

    
      //Assertion 
      expect(btn).toBeInTheDocument();
    })


    test("should load InputName inside contactUs component", () =>{

    
      render(<Contact/>)
    
    
      const inputName = screen.getByPlaceholderText("Name");

    
      //Assertion 
      expect(inputName).toBeInTheDocument();
    })


    test("should load 2 input boxes inside contactUs component", () =>{

    
      render(<Contact/>)
    

      const inputBoxes = screen.getAllByRole('textbox');
    
      //querying: gives react element/ virtual DOM object
      //console.log(inputBoxes)

    
      //Assertion 
      expect(inputBoxes).toHaveLength(2);
    })

})
