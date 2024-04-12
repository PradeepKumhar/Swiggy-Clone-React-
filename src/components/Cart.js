import {useDispatch, useSelector} from "react-redux";
import { CDN_URL } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";


const Cart = ()=> {
const cartItems = useSelector((store) => store.cart.items);
const dispatch  = useDispatch();

const handleClearCart = () =>{
    dispatch(clearCart());
};


    return (
    <div className="text-center m-10 p-10">
        <h1 className="text-3xl font-bold">Cart</h1>
    
    <div className="text-right w-9/12">
    <button className="p-2 m-4 bg-black  text-white rounded-md"
    onClick={handleClearCart}
    >Clear Cart</button>
    </div>
    {cartItems.length === 0 
  ? <h1>Cart is empty. Add Items to the cart!</h1>
  : (
    <div className="w-6/12 bg-gray-50 p-4 mx-auto my-4 shadow-lg">
      <div>
        {cartItems.map((item) => (
          <div
            key={item?.card.info.id}
            className="p-2 m-2 flex justify-between border-gray-200 border-b-2 text-left"
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
    </div>
  )
}


    </div>

    )
};

export default Cart;