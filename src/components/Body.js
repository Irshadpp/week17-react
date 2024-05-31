import ResCard from "./ResCard";
import {useState, useEffect} from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () =>{
    const [listOfRes, setListOfRes] = useState([])
    const [searchName, setSearchName] = useState("")
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2587531&lng=75.78041&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const listData = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        setListOfRes(listData)
        setFilteredRestaurants(listData)
    }

    if(!useOnlineStatus()) return <h1>Looks like your Internet connection lost, Please check....</h1>

    if(listOfRes.length === 0){

        return (
            <div><Shimmer /></div>
        )
    }
    return (
        <div className="body-container">
            <div className="filter-btn">
                <div className="search">
                <input type="text" className="search-inp" value={searchName}
                onChange={(e)=>{
                    setSearchName(e.target.value);
                }}
                />
                <button onClick={()=>{
                    const filteredList = listOfRes.filter(res => res.info.name.toLowerCase().includes(searchName.toLowerCase()));
                    setFilteredRestaurants(filteredList);
                }}
                >Search</button>
                </div>
                <button onClick={()=>{
                    const filteredList = listOfRes.filter(res => res.info.avgRating > 4.2);
                    setFilteredRestaurants(filteredList);
                }}>Filter top rated restorent</button>
            </div>
            <div className="card-container">
                {
                    filteredRestaurants.map((restaurent)=>(
                       <Link to={"/restaurantId/"+restaurent.info.id} key={restaurent.info.id} ><ResCard resData = {restaurent}/></Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;