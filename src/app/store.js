import { create } from "zustand";

const useStore = create((set) => {
  const initialDarkMode = typeof window !== 'undefined' && localStorage.getItem('dark')  ;

  return {
    dark: initialDarkMode,
    toggle: () => {
      set((state) => {
        const dark = !state.dark;
        localStorage.setItem("dark", dark.toString());
        return { dark };
      });
    },
  };
});

export default useStore;
