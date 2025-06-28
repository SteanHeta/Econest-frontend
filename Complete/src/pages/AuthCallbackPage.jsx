import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LoadingSpinner from '../components/LoadingSpinner';

const AuthCallbackPage = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { loginAction } = useAuth();

    useEffect(() => {
        const token = searchParams.get('token');
        if (token) {
            loginAction(token);
            navigate('/profile');
        } else {
            console.error("No token found in callback URL");
            navigate('/login');
        }
    }, [searchParams, loginAction, navigate]);

    return (
        <div className="text-center p-10">
            <h2 className="text-xl font-semibold mb-4">Finalizing login...</h2>
            <LoadingSpinner />
        </div>
    );
};
export default AuthCallbackPage;