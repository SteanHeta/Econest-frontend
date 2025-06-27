import React, { createContext, useState, useEffect, useContext } from 'react';
import { getProfile } from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const validateToken = async () => {
      if (token) {
        try {
          const response = await getProfile();
          setUser(response.data);
          setIsAuthenticated(true);
        } catch (error) {
          console.error('Session expired or invalid token', error);
          logout();
        }
      }
      setLoading(false);
    };
    validateToken();
  }, [token]);

  const loginAction = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
  };

  const authContextValue = { token, user, isAuthenticated, loading, loginAction, logout };

  return (
    <AuthContext.Provider value={authContextValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};