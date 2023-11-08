import React,{ createContext, useState, useContext } from "react";

type themeType = "light" | "dark";

type themeContextType = {
  theme: themeType,
  toggleTheme: () => void
}

export const ThemeContext = createContext<themeContextType | null>(null);

export const ThemeContextProvider = ({children}:{children: React.ReactNode}) => {
  // states
  const [theme, setTheme] = useState<themeType>('light');

  // expressions
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    }
    else {
      setTheme('light')
    }
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      { children }
    </ThemeContext.Provider>
  )
}

// useThemeContext hook
export const useThemeContext = () => {
  // states
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("Please use themeContext inside the ThemeContextProvider");
  }
  return themeContext;
}