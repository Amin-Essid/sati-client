import { createContext, useContext, useState } from "react";

const JournalsContext = createContext();

export function JournalsWrapper({ children }) {
  return (
    <JournalsContext.Provider value={{}}>{children}</JournalsContext.Provider>
  );
}

export function useJournalsContext() {
  return useContext(JournalsWrapper);
}
