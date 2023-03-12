import { createContext, useContext, useState } from "react";

const ThemeContext = createContext()

function ThemeProvider ({children}) {
  const [isDark, setIsDark] = useState(false);

  // 經由 onClick 事件觸發切換 isDark 為 true or false
  function handleSwitchTheme() {
    setIsDark(!isDark);
  }

  const ThemeContextData = {
    isDark,
    setIsDark,
    handleSwitchTheme,
  };

  return (
    <ThemeContext.Provider value={ThemeContextData}>
      {children}
    </ThemeContext.Provider>
  );
}

// 使用 Context 的 Hook
function useThemeData () {
  const data = useContext(ThemeContext);
  if (data === undefined) {
    throw new Error("useThemeData must be used within a ThemeProvider");
  }
  return data
}

export { ThemeProvider, useThemeData };