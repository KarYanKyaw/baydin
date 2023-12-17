import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const controlTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  const data = { theme, controlTheme };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => useContext(ThemeContext);
