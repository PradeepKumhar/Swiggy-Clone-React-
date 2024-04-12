import Shimmer from "./Shimmer";
import {useState} from 'react';
import { useParams } from "react-router-dom";
import useRestMenu from "../utils/useRestMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex ,setshowIndex] = useState(null);

  const resInfo = useRestMenu(resId);

  console.log(resInfo);

  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
   

  return (
    <div className="text-center">
      <div className="w-6/12 text-left p-4 mx-auto mt-10 ">
            <h1 className="font-bold text-2xl my-5 mt-10">{name}</h1>
      <div className="mt-5 ">
        {" "}
        <p className="text-lg font-semibold">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <h3>{avgRating}⭐</h3> 
      </div>
 
      </div>

      <h2 className="pt-2 pb-1 font-semibold text-xl">Menu</h2>

      {categories.map((category,index) => (
        <RestaurantCategory category={category.card?.card}  showItems = {index === showIndex ? true: false} 
        setshowIndex = {() => setshowIndex(index)} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
