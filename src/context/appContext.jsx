import { createContext, useReducer } from "react";
import { initialState, reducer } from "../reducer/appReducer";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[store, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
