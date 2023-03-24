import { createContext, useContext } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const value = {};

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};
