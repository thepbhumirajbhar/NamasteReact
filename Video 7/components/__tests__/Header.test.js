import { fireEvent, render, screen } from "@testing-library/react"
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


it("should load Header component with Cart item 0 button", () =>{

  render(
    <BrowserRouter>
      <Provider store={appStore}>
        (<Header/ >)
      </Provider>
    </BrowserRouter>
  )

  //const cartItems = screen.getByText("Cart (0)")

  //pasing regex to check the cart component exists
  const cartItems = screen.getByText(/Cart/);

  expect(cartItems).toBeInTheDocument();

})


it("should should change Login to Logout on click", () =>{

  render(
    <BrowserRouter>
      <Provider store={appStore}>
        (<Header/ >)
      </Provider>
    </BrowserRouter>
  )

  const logInBtn = screen.getByRole("button", {name: 'LOG IN'})

  fireEvent.click(logInBtn)

  const logOutBtn = screen.getByRole("button", {name: 'LOG OUT'})

  expect(logOutBtn).toBeInTheDocument();

})