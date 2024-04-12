import ItemsList from "./ItemsList";
import {useState} from 'react';

const RestaurantCategory = ({ category, showItems, setshowIndex }) => {
  const { title, itemCards } = category;
 const [showItem, setshowItem] = useState(showItems);

  const handleClick = () => {
    setshowIndex();
    setshowItem(!showItem);
  };

  return (
    <div>
      {/* Header */}
      <div className="w-6/12 bg-gray-50 p-4 mx-auto my-4 shadow-lg">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-semibold text-lg">
            {title} ({itemCards.length})
          </span>
          <span>{showItems ? "🔼" : "🔽"}</span>
        </div>
        {/* Items */}
        {showItem && <ItemsList data={itemCards} />}
        
      </div>
    </div>
  );
};

export default RestaurantCategory;
