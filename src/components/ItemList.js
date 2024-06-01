import { IMAGE_PATH_URL } from "../utils/constants";

const ItemList = ({items}) =>{
    return (
        <div className="">
            {
                items.map(item=>(
                    <div key={item.card.info.id} className="m-2 p-2 border-gray-200 border-b-2 text-left flex justify-between">
                        
                        <div className="w-9/12">
                            <div className="py-2">
                        <span className="font-semibold">{item.card.info.name}</span>
                        <span className=""> - ₹{item.card.info.defaultPrice ? item.card.info.defaultPrice/100 : item.card.info.price/100}</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-4">
                        <img src={IMAGE_PATH_URL + item.card.info.imageId} className="" />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList;