import { IMAGE_PATH_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const ResCard = (restaurantData) =>{    
    const {loggedInUser} = useContext(UserContext)
    const {name,cuisines,cloudinaryImageId,costForTwo,deliveryTime,avgRating } = restaurantData?.resData?.info
    return (
        <div data-testid="resCard" className="w-[230px] bg-gray-200 items-center flex flex-col m-2 rounded-lg">
            <img className="h-[200px] w-[210px] mt-2 rounded-lg" src={IMAGE_PATH_URL + cloudinaryImageId} alt="" />
            <div className="">
                 <h4>{name}</h4>
            <p>{cuisines.slice(0,2).join(",")}</p>
            <h5>{costForTwo}</h5>
            <h5>{avgRating} stars</h5>
            <h5>{deliveryTime} minutes</h5>
            <h5>{loggedInUser}</h5>
            </div>
        </div>
    )
}

export const promotedResCard = (ResCart) =>{
    return (props) =>{
        return (
            <div>
                <label className="absolute bg-black text-white rounded-sm p-1 mx-3 my-2">Vegetarian</label>
                <ResCard {...props}/>
            </div>
        )
    }
}

export default ResCard;