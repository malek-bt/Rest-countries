"use client";
import Header from "../components/header";
import useStore from "../store";
import { useEffect, useState } from "react";
import Link from "next/link";
import useDataStore from "../dataStore";


const CountryDetail = ({ params }) => {
  const darkMode = useStore((state) => state.dark);

  const [element, setElement] = useState();

  

  useEffect(() => {
    try {
      if (params.country) {
        const storedData = JSON.parse(localStorage.getItem('data'));

        const decodedName = params.country
          ? decodeURIComponent(params.country)
          : null;
        const countryElement = storedData?.find((item) => item.name.common === decodedName);
        setElement(countryElement);
        
      }
    } catch (error) {
      console.log(error);
    }

    
  }, [params.country]);

  return (
    <div>
      <Header />
      <div
        className={`h-screen ${darkMode ? "bg-dark" : "bg-lightMode"}  p-6  `}
      >
        <button
          className={`${
            darkMode ? "bg-lightDark text-white" : "bg-white text-black"
          } w-24  h-12 text-lg rounded transition-transform transform hover:scale-105 shadow-lg`}
        >
          <Link href="/">Back</Link>
        </button>
        {element ? (
          <div className=" md:flex md:justify-center md:items-center md:gap-[10%]  md:h-2/3">
            <img
              className=" my-10  md:w-1/3 md:h-3/4 "
              src={element?.flags?.png}
              alt={element?.flags?.alt}
            ></img>
            <div>
              <div className=" md:flex md:justify-center md:items-center md:gap-20">
                <div>
                  <h2
                    className={`${
                      darkMode ? "text-white" : " text-black"
                    } text-4xl font-nunito font-extrabold mb-16`}
                  >
                    {decodeURIComponent(params.country)}
                  </h2>
                  <p
                    className={`${
                      darkMode ? "text-white" : " text-black"
                    } text-lg `}
                  >
                    Native Name:{" "}
                    <span className="opacity-70">
                      {
                        element.name.nativeName[
                          Object.keys(element.name.nativeName)[0]
                        ].common
                      }
                    </span>
                  </p>
                  <p
                    className={`${
                      darkMode ? "text-white" : " text-black"
                    } text-lg `}
                  >
                    Population:{" "}
                    <span className="opacity-70"> {element?.population} </span>
                  </p>
                  <p
                    className={`${
                      darkMode ? "text-white" : " text-black"
                    } text-lg `}
                  >
                    Region:{" "}
                    <span className="opacity-70"> {element?.region}</span>
                  </p>
                  <p
                    className={`${
                      darkMode ? "text-white" : " text-black"
                    } text-lg `}
                  >
                    Sub Region:{" "}
                    <span className="opacity-70">{element?.subregion}</span>
                  </p>
                  <p
                    className={`${
                      darkMode ? "text-white" : " text-black"
                    } text-lg `}
                  >
                    Capital:{" "}
                    <span className="opacity-70">{element?.capital}</span>
                  </p>
                </div>
                <div>
                  <p
                    className={`${
                      darkMode ? "text-white" : " text-black"
                    } text-lg mt-12`}
                  >
                    Top Level Domain:
                    <span className="opacity-70"> {element?.tld}</span>
                  </p>

                  <p
                    className={`${
                      darkMode ? "text-white" : " text-black"
                    } text-lg `}
                  >
                    Currencies:
                    <span className="opacity-70">
                      {
                        element.currencies[Object.keys(element.currencies)[0]]
                          .name
                      }
                    </span>
                  </p>

                  <p
                    className={`${
                      darkMode ? "text-white" : " text-black"
                    } text-lg `}
                  >
                    Languages:
                    <span className="opacity-70">
                      {element?.languages
                        ? Object.values(element.languages).join(", ")
                        : ""}
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <p
                  className={`${
                    darkMode ? "text-white" : " text-black"
                  } text-lg mt-12`}
                >
                  Border Countries:
                  {element && element.borders && element?.borders.length > 0 ? (
                    element.borders.map((borderCountry, index) => (
                      <button
                        className={`${
                          darkMode
                            ? "bg-lightDark text-white "
                            : "bg-white text-black"
                        } w-[80px] shadow-lg h-8 text-base rounded-sm px-2 mx-2`}
                      >
                        {borderCountry}
                      </button>
                    ))
                  ) : (
                    <span className="opacity-70"> No border countries</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        ) : (
        <p></p>
        )}
      </div>
    </div>
  );
};

export default CountryDetail;
