"use client";
import { Suspense, useEffect, useState } from "react";
import useStore from "../store";
import Header from "./header";
import Search from "./search";
import CountryCard from "./countryCard";
import useDataStore from "../dataStore";

import Loading from "../loading";
import { AnimatePresence } from "framer-motion";

const HomePage = () => {
  const darkMode = useStore((state) => state.dark);
  const { data, fetchData } = useDataStore();

  const [searchInput, setSearchInput] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [selectedRegion, setSelectedRegion] = useState('');

  useEffect(() => {
    fetchData();
  }, [data !== null]);

  

  useEffect(() => {
    // Filter data based on search input and selected region
    const filteredCountries = data?.filter((country) => {
      const bySearch = country.name.common.toLowerCase().includes(searchInput.toLowerCase());
      const byRegion = selectedRegion === '' || country.region.includes(selectedRegion);
      return bySearch && byRegion;
    });

    setFilteredData(filteredCountries);
  }, [data, searchInput , selectedRegion]);
 

  return (
    <>
    <div >
      <Header />
      <div className={` min-h-screen md:p-10 `}>
        <Search onSearchChange={(value) => setSearchInput(value)} onRegionChange={(value) => setSelectedRegion(value)}/>
        <AnimatePresence>
        
          <div className="flex flex-wrap gap-10 ">
            {filteredData ? (filteredData?.map((item) => (
              <CountryCard item={item} key={item.name.common} />
            ))) : (<Loading/>)}
          </div>
          </AnimatePresence>
      </div>
      </div>
    </>
  );
};

export default HomePage;
