
import { create } from "zustand";

const useStore = create((set) => {
  

  return {
    dark: true,
    toggle: () => {
      set((state) => {
        const dark = !state.dark;
        localStorage.setItem("dark", dark.toString());
        
        return { dark  };
      });
    },
  };
});

export default useStore;
