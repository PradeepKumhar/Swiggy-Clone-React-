import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurentMenu from "../components/RestaurantMenu";
import Header from "../components/Header";
import Cart from "../components/Cart";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
jest.mock("../Logo.png", () => "LogoMock");

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should load the Restaurant menu component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurentMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Drinks (10)");

  fireEvent.click(accordionHeader); 
  expect(screen.getAllByTestId("foodItems").length).toBe(10);

  expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();

   const addBtns = screen.getAllByRole("button",{name: "Add +"});
   fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(10);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(10);

  expect(
    screen.getByText("Cart is empty. Add Items to the cart!")
  ).toBeInTheDocument();

});
