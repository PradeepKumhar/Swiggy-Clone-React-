import Logo from "../Logo.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";


const Header = () => {
  const [btnName, setbtnName] = useState("login");
  const OnlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  const {loggedInUser} = data;
 
  const cartItems = useSelector((store)=> store.cart.items);
 

  return (
    <div className="flex justify-between mb-5 bg-pink-100 rounded-lg">
      <div className="logo-container">
        <Link to="/">
          <img className="p-4 w-[160px]" src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="flex ">
        <ul className="flex px-4 py-8 m-4  text-xl ">
          <li className="px-4">Online Status : {OnlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
          <Link to="/cart">
          Cart({cartItems.length} items)</Link></li>
          <li className="px-4">
            {" "}
            <button
              onClick={() => {
                btnName === "login"
                  ? setbtnName("logout")
                  : setbtnName("login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
