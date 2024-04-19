import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

jest.mock("../Logo.png", () => "LogoMock");

it("should render Header component with a login Button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button",{name:"login"});
  expect(loginButton).toBeInTheDocument();
});

it("should render Header component with a cart item 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const cartItems = screen.getByText("Cart (0 items)");
    expect(cartItems).toBeInTheDocument();
  });

  it("should render Header component with a login Button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  const cartItems =screen.getByText(/Cart/);
  expect(cartItems).toBeInTheDocument();
  });
  
  it("should render Header component with a login Button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
   const loginButton = screen.getByRole("button",{name: "login"});
   fireEvent.click(loginButton);
   const logoutButton = screen.getByRole("button",{name: "logout"});
   expect(logoutButton).toBeInTheDocument();

  });
  
  