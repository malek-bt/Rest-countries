import { useEffect, useState } from "react";
import useStore from "../store";

const Search = ({ onSearchChange , onRegionChange }) => {
    const darkMode = useStore((state) => state.dark);
    const [searchInput , setSearchInput ] = useState('')
    const [selected , setSelected] = useState('')

    useEffect(() => {
      // Trigger the callback when the search input changes
      onSearchChange(searchInput);
      onRegionChange(selected)
    }, [searchInput, onSearchChange , selected , onRegionChange]);
  

  return (
  
   <div className="md:flex md:justify-between">
    <div className="mx-5 mx-auto pt-5 w-[90%]">
      <input  className={`w-full h-14  p-2 pl-4 rounded-lg text-xl ${darkMode? 'bg-lightDark text-white' : 'bg-white text-black'} md:w-96`} type="text" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} placeholder="Search for a country..." />
    </div>
    <div>
    
        <select value={selected} onChange={(e)=> setSelected(e.target.value)} className={`w-40 h-14 rounded-lg p-2 m-5  ${darkMode? 'bg-lightDark text-white' : 'bg-white tewt-black'}`}>
        <option value="">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    </div>
    </div>
  
  );
};
export default Search;
