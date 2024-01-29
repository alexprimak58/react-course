import { createContext, useContext } from "react";

// creating the context
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// making everyone to be aware of it
export const ThemeProvider = ThemeContext.Provider;

// to make everyone to be able to use it
export default function useTheme() {
  return useContext(ThemeContext);
}
