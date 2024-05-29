import { IMAGE_PATH_URL } from "../utils/constants";

const ResCard = (restaurantData) =>{
    console.log(restaurantData?.resData?.info);
    const {name,cuisines,cloudinaryImageId,costForTwo,deliveryTime,avgRating } = restaurantData?.resData?.info
    return (
        <div className="res-container">
            <img className="card-img" src={IMAGE_PATH_URL + cloudinaryImageId} alt="" />
            <div className="contents">
                 <h4>{name}</h4>
            <p>{cuisines.slice(0,2).join(",")}</p>
            <h5>{costForTwo}</h5>
            <h5>{avgRating} stars</h5>
            <h5>{deliveryTime} minutes</h5>
            </div>
        </div>
    )
}

export default ResCard;