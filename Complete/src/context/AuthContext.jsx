import React, { createContext, useState, useContext, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import apiClient, { getProfile, login, register } from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setTokenState] = useState(localStorage.getItem('econest_token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const idToken = await firebaseUser.getIdToken();
          const res = await apiClient.post('/auth/google/callback', { idToken });
          const jwtToken = res.data.access_token;
          localStorage.setItem('econest_token', jwtToken);
          apiClient.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
          const profileRes = await getProfile();
          setUser(profileRes.data);
          setTokenState(jwtToken);
        } catch {
          logout();
        }
      } else {
        if (token) {
          apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          try {
            const response = await getProfile();
            setUser(response.data);
          } catch {
            logout();
          }
        } else {
          setUser(null);
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [token]);

  const loginWithEmail = async (email, password) => {
    const response = await login({ email, password });
    const jwtToken = response.data.access_token;
    localStorage.setItem('econest_token', jwtToken);
    setTokenState(jwtToken);
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
    const profileRes = await getProfile();
    setUser(profileRes.data);
  };

  const registerWithEmail = async (username, email, password) => {
    await register({ username, email, password });
    await loginWithEmail(email, password);
  };

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const logout = async () => {
    localStorage.removeItem('econest_token');
    delete apiClient.defaults.headers.common['Authorization'];
    setTokenState(null);
    setUser(null);
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, loginWithEmail, registerWithEmail, loginWithGoogle, logout, isAuthenticated: !!user, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
