
import { create } from 'zustand'



const useDataStore = create((set)=> ({
    data : null,
    
    fetchData : async () => {
        try {
        const response = await fetch('https://restcountries.com/v3.1/all')
       
        const data = await response.json()

        set({data})
         // Save data to localStorage
      localStorage.setItem('data', JSON.stringify(data));

        } catch (error){
            console.log(error)
        }
    },

    
    
   
}))

export default useDataStore