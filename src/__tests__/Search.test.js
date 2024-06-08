import { act, fireEvent, render, screen } from "@testing-library/react"
import Body from '../components/Body'
import MOCK_DATA from '../mocks/ResListMock.json'
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom'


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

test("should render the body component with searching", async ()=>{
    await act(async ()=>render(
        <BrowserRouter><Body/></BrowserRouter>
    ));
    const searchButton = screen.getByRole('button', {name:"Search"});
    const searchInput = screen.getByTestId('searchInput');
    fireEvent.change(searchInput, {target:{value: "alankar"}});
    fireEvent.click(searchButton);
    const resCard = screen.getAllByTestId('resCard');
    expect(resCard.length).toBe(1)
})