import { act, fireEvent, render, screen } from '@testing-library/react';
import MOCK_DATA from '../mocks/ResMenu.json';
import Menu from '../components/Menu';
import { Provider } from 'react-redux';
import appStore from '../utils/appStore';
import '@testing-library/jest-dom';
import Header from '../components/Header';
import Cart from '../components/Cart'
import { BrowserRouter } from 'react-router-dom';

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

test('should load Menu component', async() => {

  await act(async () => render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
        <Menu/>
        <Cart/>
    </Provider>
  </BrowserRouter>
))

  const accordianHeader = screen.getByText("New Thin n Crispy Pizzas (6)");

  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId('itemList').length).toBe(6);

  const addBtns = screen.getAllByRole('button',{name:"Add+"});

  fireEvent.click(addBtns[0]);

  const cartItem = screen.getByText("Cart (1 Items)");

  expect(screen.getAllByTestId('itemList').length).toBe(7);

  const clearBtn = screen.getByRole('button', {name:"Clear Cart"});

  fireEvent.click(clearBtn);

  expect(screen.getAllByTestId('itemList').length).toBe(6);

})
