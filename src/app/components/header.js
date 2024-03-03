'use client'

import { useEffect } from "react";
import useStore from "../store";


const Header = () => {
    const darkMode = useStore((state) => state.dark);
    const toggle = useStore((state) => state.toggle);
    

  return (
    <div className={`${darkMode ? 'bg-lightDark' : 'bg-white'} h-20 flex justify-between items-center px-4`}>
     <h2 className={`${darkMode ? 'text-white' : 'text-dark'} text-lg font-medium`}>Where in the world ?</h2>
     {darkMode ? <img onClick={toggle} src="icon-sun.svg" className=""></img> : <img onClick={toggle} src="moon-solid.svg" className=""></img>}
     
    </div>
  );
}
export default Header;