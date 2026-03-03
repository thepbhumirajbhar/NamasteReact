import { render } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

it("should load Header component with a Login button", () =>{

  render(
    <BrowserRouter>
      <Provider store={appStore}>
        (<Header/ >)
      </Provider>
    </BrowserRouter>
  )

})