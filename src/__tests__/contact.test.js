import { render, screen } from "@testing-library/react"
import Contact from "../components/Contact"
import "@testing-library/jest-dom"


describe("Contact page test cases", ()=>{

    test("Contact should render", ()=>{
    render(<Contact/>);

    const heading = screen.getByRole('heading');

    //Assertoin
    expect(heading).toBeInTheDocument()
});

test("Should load button insed the component", ()=>{
    render(<Contact/>)
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
});

test("should load two input boxes inside the component", ()=>{
    render(<Contact/>)
    const input = screen.getAllByRole('textbox');
    expect(input.length).toBe(2);
})

})


