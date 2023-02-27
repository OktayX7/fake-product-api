import {createContext, useContext, useState} from "react";

const Context = createContext();

export const ProductContext = ({children}) => {
  const [products, setProducts] = useState(null);

  const data = {
    products,
    setProducts,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useProductContext = () => useContext(Context);
