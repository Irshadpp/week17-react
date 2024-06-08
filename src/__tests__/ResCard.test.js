import { render, screen } from "@testing-library/react"
import ResCard from "../components/ResCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import '@testing-library/jest-dom'

test("Should render ResCard with prop value", ()=>{
    render(
        <ResCard resData={MOCK_DATA.resData}/>
    )

    const name = screen.getByText("Puresouth");

    expect(name).toBeInTheDocument()

})