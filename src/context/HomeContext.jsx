import { createContext, useEffect, useState } from "react";
import { getHomeData } from "../services/homeApi";

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [homeData, setHomeData] = useState(null);

  const fetchHome = async () => {
    const data = await getHomeData();
    setHomeData(data);
  };

  useEffect(() => {
    fetchHome();
  }, []);

  return (
    <HomeContext.Provider value={{ homeData, fetchHome }}>
      {children}
    </HomeContext.Provider>
  );
};
