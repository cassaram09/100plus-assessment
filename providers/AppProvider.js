import { createContext, useContext } from "react";

AppProvider.propTypes = {
  children: PropTypes.node,
};

const AppContext = createContext({});

export function AppProvider({ children }) {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}

export default function useAppState() {
  return useContext(AppContext);
}
