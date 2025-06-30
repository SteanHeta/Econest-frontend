import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { setToken } = useAuth();

  useEffect(() => {
    const token = searchParams.get('token');

    if (token) {
      setToken(token);
      navigate('/');
    } else {
      navigate('/login');
    }
  }, [searchParams, setToken, navigate]);

  return <div>Logging you in...</div>;
};

export default LoginSuccess;