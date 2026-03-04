const { render, screen } = require("@testing-library/react");
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";

// for toBeInTheDocument
import "@testing-library/jest-dom";

// to test HOC
import { withPromotedLabel } from "../RestaurantCard";  






it("should render RestaurantCard component with Props Data", () => {

  // Adding props while testing
  render(<RestaurantCard resData={MOCK_DATA}/>)

  // Checking whether the restaurant name got rendered on screen on not
  const ResName = screen.getByText("Chinese Wok");

  expect(ResName).toBeInTheDocument;
})


                                        //**** TESTING HOC ****/
it("should render RestaurantCard component with Promoted Label", () => {


  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    
  render(<RestaurantCardPromoted resData={MOCK_DATA}/>)

  const CheckLabel = screen.getByText("Promoted label");

  expect(CheckLabel).toBeInTheDocument();

  
})                                       