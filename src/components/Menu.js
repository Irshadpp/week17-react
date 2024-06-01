import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import CatergoryItem from "./CategoryItem";
import {useState} from "react";

const Menu = () =>{

    const {resId} = useParams()

    const resInfo = useResMenu(resId);

    const [showIndex, setShowIndex] = useState(null)

    if(resInfo === null) return <Shimmer />

    const {name, cuisines, costForTwoMessage} = resInfo.cards[2].card.card.info;
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(cat=>(
        cat?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ))

    return (
        <div className="text-center">
            <h1 className="font-bold py-6 text-2xl">{name}</h1>
            <h3 className="font-bold">{cuisines.join(", ") + costForTwoMessage}</h3>
            {
                categories.map((cat, index)=>(
                    <CatergoryItem
                     key={cat.card.card.title} 
                     data={cat.card.card}
                     showItems={index === showIndex ? true : false}
                     setShowIndex = {()=>{setShowIndex(index)}}
                     />
                ))
            }
        </div>
    )
}

export default Menu;