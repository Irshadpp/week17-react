import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            avatar:"",
            location: "",
            count: 0,
        }
        console.log(this.props.name+"child component constructor called")
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/irshadpp")
    const json = await data.json()
    this.setState({name:json.login, avatar:json.avatar_url, location:json.location});
    console.log(json)
        console.log(this.props.name+"children component did mount called")
    }
    render(){   
        const { place, contact} = this.props;
        const {count, name, avatar, location} = this.state;
        console.log(name+"child component rendered")
        return (
            <div className="user-card">
            <h1>Name: {name}</h1>
            <h2>Place: {location}</h2>
            <h2>Contact: {contact}</h2>
            <h3>Count: {count}</h3>
            <img src={avatar} alt="" />
            <button onClick={()=>{
                this.setState({
                    count: count + 1
                })
            }}>Increment</button>
            </div>
        )
    }
}
export default UserClass;