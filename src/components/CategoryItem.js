import ItemList from "./ItemList";
import {useState} from "react";

const CatergoryItem = ({data, showItems, setShowIndex}) =>{
    // const [showItems, setShowItems] = useState(false)
    const handleClick = () =>{
        // setShowItems(!showItems)
        setShowIndex();
    }
    return (
        <div className="w-6/12 bg-gray-50 mx-auto  my-2 shadow-lg">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold my-2 mx-2">{data.title} ({data.itemCards.length})</span>
            <span className="my-2 mx-2">🔽</span>  
            </div>
               { showItems && <ItemList items={data.itemCards}/> }
               
        </div>
    )
}

export default CatergoryItem;