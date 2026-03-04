const { render, screen } = require("@testing-library/react");
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";

// for toBeInTheDocument
import "@testing-library/jest-dom";


it("should render RestaurantCard component with Props Data", () => {

  // Adding props while testing
  render(<RestaurantCard resData={MOCK_DATA}/>)

  // Checking whether the restaurant name got rendered on screen on not
  const ResName = screen.getByText("Chinese Wok");

  expect(ResName).toBeInTheDocument;
})