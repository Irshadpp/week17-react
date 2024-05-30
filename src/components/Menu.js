import Shimmer from "./shimmer";
import {useState, useEffect} from "react";

const Menu = () =>{

    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () =>{
        const menuData = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.2587531&lng=75.78041&restaurantId=382724&catalog_qa=undefined&submitAction=ENTER");
        const json = await menuData.json()
        const menu = json.data;
        console.log(menu)
        setResInfo(menu)
    }
    
    if(resInfo === null) return <Shimmer />

    return (
        <div className="menu">
            {/* <h1>{resInfo.name}</h1> */}
            {/* <h3>{resInfo.cuisines.join(", ")}</h3> */}
            <ul>
                <li>item1</li>
                <li>item1</li>
                <li>item1</li>
                <li>item1</li>
                <li>item1</li>
            </ul>
        </div>
    )
}

export default Menu;