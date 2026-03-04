import { render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { BrowserRouter } from "react-router-dom";


//resolving fetch
global.fetch = jest.fn(()=>{
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA)
  })
})


it("should load restaurantMenu component", async() =>{
    await act( async() => render (
    <BrowserRouter>
      <RestaurantMenu/>
    </BrowserRouter>
    ))


    //finding accordian heading
    const accordHead = screen.getByText("Pastries (7)");

})