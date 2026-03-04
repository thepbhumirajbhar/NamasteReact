import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";


//! grouping multiple test cases into a block: describe
describe("ContactUs Page test cases", () => {

  beforeAll(()=>{
    console.log("JEST gives it. this fun gets executed b4 all tests")
  })

  beforeEach(()=>{
    console.log("it runs b4 each test")
  })

  afterAll(()=>{
    console.log("it runs after all test")
  })

  afterEach(()=>{
    console.log("it runs after each test")
  })



    test("should load contact us component", () =>{

      //! STEP1: render the component to the jsdom
      render(<Contact/>)
    
    
      const heading = screen.getByRole("heading");

    
      //Assertion 
      expect(heading).toBeInTheDocument();
    })


    it("should load button inside contactUs component", () =>{


      render(<Contact/>)
    
    
      //const btn = screen.getByRole("button");
    
      //Another way of doing above thing
      const btn = screen.getByText("Submit")

    
      //Assertion 
      expect(btn).toBeInTheDocument();
    })


    it("should load InputName inside contactUs component", () =>{

    
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
