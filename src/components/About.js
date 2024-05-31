import User from '../components/User';
import UserClass from '../components/UserClass';
import React from "react"

class About extends React.Component{
    constructor(props){
        super(props)
        console.log("parent component constructor is called");
    }
    async componentDidMount(){
        console.log("parent component did mount called")
    }
    render(){
        console.log("parent component rendered")
        return(
            <div className="about">
            <h1>You can't know about us</h1>
            {/* <User name={"Irshad"} place={"Malappuram"} contact={341413243134}/> */}
            {/* <UserClass name={"first"} place={"Malappuram"} contact={341413243134}/> */}
            <UserClass name={"second"} place={"Malappuram"} contact={341413243134}/>
        </div>
        )
    }
}

// const About = () =>{
//     return (
//         <div className="about">
//             <h1>You can't know about us</h1>
//             <User name={"Irshad"} place={"Malappuram"} contact={341413243134}/>
//             <UserClass name={"Irshad"} place={"Malappuram"} contact={341413243134}/>
//         </div>
//     )
// }

export default About;