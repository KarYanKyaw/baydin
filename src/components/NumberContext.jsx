import { createContext, useContext, useEffect, useState } from "react";
import { numbersData } from "../data";

const NumberContext = createContext();

export const NumberContextProvider = ({ children }) => {
  const [numberGridData, setNumberGridData] = useState([]);
  const [numberPageLoading, setNumberPageLoading] = useState(true);

  const numberDataFetching = async () => {
    const res = await fetch("http://localhost:3000/numberList");
    const data = await res.json();
    setNumberGridData(data);
    setNumberPageLoading(!numberPageLoading);
  };

  useEffect(() => {
    numberDataFetching();
  }, []);
  const data = { numberGridData, numberPageLoading };
  return (
    <NumberContext.Provider value={data}>{children}</NumberContext.Provider>
  );
};
export const useNumberContext = () => useContext(NumberContext);
