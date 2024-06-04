import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () =>{
    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser)
    const [loginName, setLoginName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between bg-green-100 shadow-lg">
            <div className="">
                <img className="w-28" src={LOGO_URL} alt="" />
            </div>
            <div className="flex items-center">
                <ul className="flex px-4 ">
                    <li className="px-4">Online Status:{onlineStatus ? "✅":"🔴"}</li>
                    <li className="px-4"> <Link to="/">Home</Link></li>
                    <li className="px-4"> <Link to="/about">About</Link> </li>
                    <li className="px-4"> <Link to="/contact">Contact</Link> </li>
                    <li className="px-4">Cart</li>
                    <button className="login" onClick={()=>{
                        loginName === "Login" ? setLoginName("Logout") : setLoginName("Login")
                    }}>{loginName}</button>
                    <li className="mx-3 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
