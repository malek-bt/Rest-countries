import { create } from "zustand";

const initialDarkMode = localStorage.getItem('dark') === 'true';

const useStore = create((set) => ({

    
  dark: initialDarkMode,
  toggle: () => {
    set((state) => {
      const dark = !state.dark;
      localStorage.setItem("dark", dark.toString());
      return { dark: dark };
    });
  },
}));

export default useStore;
