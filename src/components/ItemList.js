import { IMAGE_PATH_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) =>{
    const dispatch = useDispatch();
    const handleAddItem = (item) =>{
        dispatch(addItem(item));
    }
    return (
        <div className="">
            {
                items.map(item=>(
                    <div data-testid="itemList" key={item.card.info.id} className="m-2 p-2 border-gray-200 border-b-2 text-left flex justify-between">
                        
                        <div className="w-9/12">
                            <div className="py-2">
                        <span className="font-semibold">{item.card.info.name}</span>
                        <span className=""> - ₹{item.card.info.defaultPrice ? item.card.info.defaultPrice/100 : item.card.info.price/100}</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button className="rounded px-2 bg-black mx-8 text-white "
                            onClick={()=>handleAddItem(item)}
                            >Add+</button>
                        </div>
                        <img src={IMAGE_PATH_URL + item.card.info.imageId} className="" />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList;