import Shimmer from "./shimmer";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const Menu = () =>{

    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams()
    console.log(useParams())

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () =>{
        const menuData = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.2587531&lng=75.78041&restaurantId=490981&catalog_qa=undefined&submitAction=ENTER");
        const json = await menuData.json()
        setResInfo(json.data);
    }

    if(resInfo === null) return <Shimmer />

    const {name, cuisines, costForTwoMessage} = resInfo.cards[2].card.card.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap)

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <ul>
                {itemCards.map((menuItem)=>{
                    return (<li key={menuItem.card.info.id}>{menuItem.card.info.name +" - "+ menuItem.card.info.price/100}</li>)
                })}
            </ul>
        </div>
    )
}

export default Menu;