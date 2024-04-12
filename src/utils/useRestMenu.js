import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () =>{
    const data = await fetch(
      MENU_API+resId
    );
    const json = await data.json();
    setresInfo(json?.data);
  }
 console.log(resInfo);

  return resInfo;
};

export default useRestMenu;