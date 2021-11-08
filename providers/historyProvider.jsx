import React, { useState, useContext, createContext } from "react";

const HistoryContext = createContext();

export function useHistory() {
  const context = useContext(HistoryContext);
  if (!context) throw new Error('useHistory must be used within a ThemeProvider');
  return context;
}

const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);
  return (
    <HistoryContext.Provider
      value={{
        history,
        addHistory: historyItem => setHistory([...history, historyItem])
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

export default HistoryProvider;