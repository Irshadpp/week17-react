import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


// // const heading = React.createElement("h1", { id: "title" }, "Hello world");
// // const heading = <h1 className='heading'>Hello world</h1>

// const Text = () => (
//     <div>
//         <Head2/>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum maxime possimus harum incidunt commodi officia dolores eveniet voluptas natus. Exercitationem beatae libero sunt eum provident eaque ut odit quas eius.</p>
//     </div>
// ) 
// const Text2 = () =>{
//     return <p id="text2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, aliquid maiores tenetur praesentium ratione molestiae ab, porro illo iste autem suscipit qui obcaecati ad et libero ex ipsum voluptate impedit?</p>
// }
// const Head2 = () =>(
//     <div>
//         <h2>hoooiiiii</h2>
//     </div>
// )
// let data = 1000000
// const HeadingComponent = () => (
//     <div>
//         <h1>Hello world
//         </h1>
//             {data}
//         <Text/>
//         <Text2/>
//     </div>
// )


const AppLayout = () =>{
    return (
        <div>
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />)