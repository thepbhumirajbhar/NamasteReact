import { fireEvent, render, screen } from "@testing-library/react";

// act guarantees that all background tasks—like API calls, state updates, and useEffect hooks—are fully completed and rendered before your test proceeds.
import { act } from "react";

import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";

// for 'link to'
import { BrowserRouter } from "react-router-dom";

// Providing redux store for 'useSelector' and other redux commands.
import { Provider } from "react-redux";
import appStore from "../../utils/appstore";


//resolving fetch
global.fetch = jest.fn(()=>{
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA)
  })
})


it("should load restaurantMenu component", async() =>{
    await act( async() => render (
      <Provider store={appStore}>
        <BrowserRouter>
          <RestaurantMenu/>
        </BrowserRouter>
      </Provider>
    
    ))


    //finding accordian heading
    const accordHead = screen.getByText("Pastries (7)");

    // click on it to view the menu
    fireEvent.click(accordHead)

    //checking the num of items are in pastries accord.
    const items = screen.getAllByTestId("foodItems")

    expect(items).toHaveLength(7);

})