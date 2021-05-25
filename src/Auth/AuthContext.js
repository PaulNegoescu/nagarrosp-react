import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
  const [accessToken, setAccessToken] = useState();
  const [userProfile, setUserProfile] = useState();

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
