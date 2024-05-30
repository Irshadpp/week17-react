import ResCard from "./ResCard";
import {useState, useEffect} from "react";
import Shimmer from "./shimmer";


const Body = () =>{
    const [listOfRes, setListOfRes] = useState([])
    const [searchName, setSearchName] = useState("")
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    console.log(listOfRes)

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
                        <ResCard key={restaurent.info.id} resData = {restaurent}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;