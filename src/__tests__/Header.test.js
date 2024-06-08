import { Provider } from "react-redux";
import Header from "../components/Header"
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'


test("Should load header with login button", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
});

test("Should load header with cart", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );
    const cart = screen.getByText("Cart (0 Items)");
    expect(cart).toBeInTheDocument();
});

test("Should work login on click", ()=>{
   render( <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>)

    const loginButton = screen.getByRole('button', {name:'Login'});

    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole('button', {name:'Logout'});

    expect(logoutButton).toBeInTheDocument();
})