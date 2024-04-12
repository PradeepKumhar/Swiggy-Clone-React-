import React from 'react';
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo } = resData?.info;
    const sla = resData?.info?.sla;
    console.log(resData);

    return (
        <div className='p-4 m-2 w-[250px] h-[410px] bg-gray-100 hover:bg-gray-200  rounded-lg'>
            <img className='rounded-lg w-60 h-36' src={CDN_URL + resData?.info?.cloudinaryImageId} alt={name} />
            <h3 className='font-bold py-4 text-lg'>{name}</h3>
            <div className='res-details'>
                <h4>{cuisines?.join(", ")}</h4>
                <h4>{avgRating} ⭐</h4>
                <h4>{costForTwo}</h4>
            </div>
        </div>
    );
};

export const isOpen = (WrappedComponent) => {
    return (props) => {
        return (
          <div>
            <label className="absolute bg-black text-white rounded-sm w-14 pl-2">Open</label>
            <WrappedComponent {...props} />
          </div>
        );
    };
};

export default RestaurantCard;
