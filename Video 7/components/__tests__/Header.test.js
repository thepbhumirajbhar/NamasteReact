import { render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appstore"
import { BrowserRouter } from "react-router-dom"

// for toBeInTheDocument
import "@testing-library/jest-dom"

it("should load Header component with a Login button", () =>{

  render(
    <BrowserRouter>
      <Provider store={appStore}>
        (<Header/ >)
      </Provider>
    </BrowserRouter>
  )

  //const loginBtn = screen.getByRole("button");
  //const loginBtn = screen.getByText("LOG IN");

  //! if there are many btns-> look for login btn, make it more descriptive 
  const loginBtn = screen.getByRole("button",{name:"LOG IN"});

  expect(loginBtn).toBeInTheDocument();

})