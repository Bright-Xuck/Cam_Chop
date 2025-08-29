import { createContext, useState, useContext } from "react";

export const MerchantContext = createContext();
export default function MerchantProvider({ children }) {
    
  const [currentUser, setcurrentUser] = useState(null);

  return (
    <MerchantContext.Provider value={{ currentUser, setcurrentUser }}>
      {children}
    </MerchantContext.Provider>
  );
}

export function useMerchant(){
    return useContext(MerchantContext)
}