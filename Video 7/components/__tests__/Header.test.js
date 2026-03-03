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

  const loginBtn = screen.getByRole("button");

  expect(loginBtn).toBeInTheDocument();

})