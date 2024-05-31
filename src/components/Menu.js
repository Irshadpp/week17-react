import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";

const Menu = () =>{

    const {resId} = useParams()

    const resInfo = useResMenu(resId);

    if(resInfo === null) return <Shimmer />

    const {name, cuisines, costForTwoMessage} = resInfo.cards[2].card.card.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

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