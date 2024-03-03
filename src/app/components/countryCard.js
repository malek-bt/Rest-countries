
import Link from "next/link";
import useStore from "../store";
import { motion } from "framer-motion"
import { Tilt } from "react-tilt";


const CountryCard = ({ item }) => {
  const darkMode = useStore((state) => state.dark);
  const name = item.name.common;
  const population = item.population;
  const region = item.region;
  const capital = item.capital;
  const flagSrc = item.flags.png;
  const flagAlt = item.flags.alt;

 
  

  const fadeIn = (direction, type, delay, duration) => {
    
    return {
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };

  return (
    <Tilt>
    
      <motion.div variants={fadeIn('right','spring',0.5,0.75)}
        className={`w-[75%] shadow-xl md:w-[300px] mx-auto rounded-lg  ${
          darkMode ? "bg-lightDark" : "bg-white"
        }`}
      >
        <div options={{max:45 , scale : 1 , speed : 450}}>
        <Link href={{ pathname: `/${name}` }}>
          <img
            className="w-[100%] rounded-t-lg h-40"
            src={flagSrc}
            alt={flagAlt}
          ></img>
          <div className="p-6">
            <h3
              className={`${
                darkMode ? "text-white" : "text-black"
              } text-2xl mb-4 font-nunito font-extrabold`}
            >
              {name}
            </h3>
            <p
              className={`${darkMode ? "text-white" : "text-black"} text-base`}
            >
              Population: {population}
            </p>
            <p
              className={`${darkMode ? "text-white" : "text-black"} text-base`}
            >
              Region: {region}
            </p>
            <p
              className={`${darkMode ? "text-white" : "text-black"} text-base`}
            >
              Capital: {capital}
            </p>
          </div>
        </Link>
        </div>
    </motion.div>
    </Tilt>
  );
};
export default CountryCard;
