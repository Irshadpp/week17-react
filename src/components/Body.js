import ResCard from "./ResCard";
import resList from "../utils/mockData";


const Body = () =>{
    return (
        <div className="body-container">
            <div className="search">Search</div>
            <div className="card-container">
                {
                    resList.map((restaurent)=>(
                        <ResCard key={restaurent.info.id} resData = {restaurent}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;