import React from "react";
import {createContext, useContext, useState} from "react";

const Context = createContext();

export const BasketContext = ({children}) => {
  const [basket, setBasket] = useState([]);

  const data = {
    basket,
    setBasket,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useBasketContext = () => useContext(Context);
