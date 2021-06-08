import { createContext, useContext, useState } from 'react';
import { useLocalStorageState } from '../shared/hooks/useLocalStorageState';

export const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
  const [accessToken, setAccessToken] = useLocalStorageState('accessToken');
  const [userProfile, setUserProfile] = useLocalStorageState('userProfile');

  function login(accessToken, userProfile) {
    setAccessToken(accessToken);
    setUserProfile(userProfile);
  }

  function logout() {
    login();
  }

  return (
    <AuthContext.Provider value={{ accessToken, userProfile, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
