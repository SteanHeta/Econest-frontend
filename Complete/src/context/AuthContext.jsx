import React, { createContext, useState, useContext, useEffect } from 'react';
import { login as apiLogin, register as apiRegister, getProfile } from '../services/api'; 
import apiClient from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setTokenState] = useState(localStorage.getItem('econest_token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        try {
          const response = await getProfile();
          setUser(response.data);
        } catch (error) {
          console.error("Token is invalid or expired. Logging out.", error);
          logout();
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    };

    fetchUser();
  }, [token]); 

  const setToken = (newToken) => {
    if (newToken) {
      localStorage.setItem('econest_token', newToken);
    } else {
      localStorage.removeItem('econest_token');
    }
    setTokenState(newToken);
  };
  
  const loginWithEmail = async (email, password) => {
    const response = await apiLogin({ email, password });
    setToken(response.data.access_token);
  };

  const registerWithEmail = async (username, email, password) => {
    await apiRegister({ username, email, password });
    await loginWithEmail(email, password);
  };

  const logout = () => {
    setToken(null);
    delete apiClient.defaults.headers.common['Authorization'];
  };

  const authValue = {
    user,
    setToken, 
    loginWithEmail,
    registerWithEmail,
    logout,
    isAuthenticated: !!user, 
  };

  return (
    <AuthContext.Provider value={authValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);