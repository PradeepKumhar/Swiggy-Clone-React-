import RestaurantCard, { isOpen } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
 
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filterList, setFilterList] = useState([]);

  const [searchText, setSearchText] = useState("");


 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8627931&lng=75.82033779999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

  
    setListOfRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
    setFilterList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
  };

  const ResOpenCheck = isOpen(RestaurantCard);
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="pl-20">
      <div className="flex">
        <div>
          <input
            type="text"
            data-testid = "searchInput"
            className="px-4 py-2 m-4 border border-solid border-black rounded-lg"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              setFilterList(listOfRestaurants.filter(res =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              ));
            }}
          >
            Search
          </button>


        </div>
        <div>
          <button
            className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
            onClick={() => {
              setFilterList(listOfRestaurants.filter(res => res.info.avgRating > 4.2));
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        {/* <div>
          <input className= "px-4 py-2 m-4 rounded-lg border border-black" type="text" value={loggedInUser} onChange={(e)=>{
            setuserName(e.target.value);
          }} />
        </div> */}
      </div>

      <div className="flex flex-wrap">
        {filterList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.availability && restaurant.info.availability.opened ? (
              <ResOpenCheck resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
 

export default Body;
