import React, { useState, createContext, useContext } from "react";

const ThemeContext = createContext();

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
}

// export function ThemeConsumer({children}) {
//   return (
//     <ThemeContext.Consumer>
//       {context => {
//         if (context === undefined) {
//           throw new Error('ThemeConsumer must be used within a ThemeProvider')
//         }
//         return children(context)
//       }}
//     </ThemeContext.Consumer>
//   )
// }

const ThemeProvider = ({ children }) => {
  const currentTheme = localStorage.getItem('ElTheme');
  const [theme, setTheme] = useState(currentTheme);
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: () => {
          const newTheme = theme === "dark" ? "light" : "dark";
          setTheme(newTheme)
          localStorage.setItem('ElTheme', newTheme)
        }
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;