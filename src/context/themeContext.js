import {createContext, useContext, useState} from "react";

const Context = createContext();

export const ThemeContext = ({children}) => {
  const [theme, setTheme] = useState("dark");

  const data = {
    theme,
    setTheme,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useThemeContext = () => useContext(Context);
