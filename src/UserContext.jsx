import { createContext, useContext } from 'react';

export const UserContext = createContext(null);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser должен использоваться внутри UserContext.Provider');
  }
  return context;
};