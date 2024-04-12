import {useDispatch} from 'react-redux';
import {CDN_URL} from '../utils/constants.js';
import { addItem } from '../utils/cartSlice.js';

const ItemsList = (item) => {

const dispatch  = useDispatch();

const handleAddItems = (item) =>{
  dispatch(addItem(item));
}

  const items = item.data;
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card.info.id}
          className=" p-2 m-2 flex justify-between border-gray-200 border-b-2 text-left"
        >
          <div className='w-8/12'> 
          <div className="py-2 ">
            <span className="font-bold "> {item?.card.info.name}</span>
            <p>
              {" "}
              ₹{" "}
              {item?.card.info.price
                ? item?.card.info.price / 100
                : item?.card.info.defaultPrice / 100}
            </p>
            </div>
            <p className="text-s"> {item?.card.info.description}</p>
          </div>
          
         <div className='w-3/12 '>
         
          <div className='absolute'>
          <button className='p-2 bg-black text-white shadow-lg rounded-lg m-auto' onClick={()=> handleAddItems(item)}>Add +</button>
          </div>

          <img className='w-full rounded-md'
            src={item?.card.info.imageId ? CDN_URL + item?.card.info.imageId : ""}  
          /> 
         </div>
        </div>
        
      ))}
    </div>
  );
};

export default ItemsList;
