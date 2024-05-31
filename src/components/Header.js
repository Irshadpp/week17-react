import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{
    const [loginName, setLoginName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status:{onlineStatus ? "✅":"🔴"}</li>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/about">About</Link> </li>
                    <li> <Link to="/contact">Contact</Link> </li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        loginName === "Login" ? setLoginName("Logout") : setLoginName("Login")
                    }}>{loginName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
