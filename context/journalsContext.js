import { createContext, useContext, useState } from "react";

const JournalsContext = createContext();

export function JournalsWrapper({ children }) {
  const [journals, setJournals] = useState([]);

  return (
    <JournalsContext.Provider value={{ journals, setJournals }}>
      {children}
    </JournalsContext.Provider>
  );
}

export function useJournalsContext() {
  return useContext(JournalsWrapper);
}
