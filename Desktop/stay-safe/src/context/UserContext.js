import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 'current-user-123',
    name: 'John Doe',
    isPremium: false, // Toggle this to test Free vs Premium
  });

  const upgradeToPremium = () => {
    setUser({ ...user, isPremium: true });
  };

  const downgradeToFree = () => {
    setUser({ ...user, isPremium: false });
  };

  return (
    <UserContext.Provider value={{ user, upgradeToPremium, downgradeToFree }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);