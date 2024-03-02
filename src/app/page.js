'use client'
import HomePage from "./components/home";
import useStore from "./store";

export default function Home() {
  const darkMode = useStore((state) => state.dark);
  return (
   <div className={` ${darkMode ? "bg-dark" : "bg-lightMode"}  `}>
     <HomePage />
     </div>
      
    
    
   
  );
}
