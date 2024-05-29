import ResCard from "./ResCard";
import resList from "../utils/mockData";
import {useState} from "react";


const Body = () =>{
    let [listOfRes, setListOfRes] = useState(resList)
    return (
        <div className="body-container">
            <div className="filter-btn">
                <button onClick={()=>{
                    const filteredList = listOfRes.filter(res => res.info.avgRating > 4.2);
                    setListOfRes(filteredList);
                }}>Filter rating</button>
            </div>
            <div className="card-container">
                {
                    listOfRes.map((restaurent)=>(
                        <ResCard key={restaurent.info.id} resData = {restaurent}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;