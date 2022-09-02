import { createContext } from "react";
import { useState } from "react";

export const appContext = createContext();
export function AppContextProvider(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [buyObj, setBuyObj] = useState(0);
  function sumBuyObj(buyObj) {
    setBuyObj(buyObj + 1);
  }

  return (
    <appContext.Provider
      value={{
        buyObj: buyObj,
        sumBuyObj: sumBuyObj,
      }}
    >
      {props.children}
    </appContext.Provider>
  );
}
