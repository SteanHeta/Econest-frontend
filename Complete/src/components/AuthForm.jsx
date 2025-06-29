import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

const AuthForm = ({ isRegister = false }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { loginWithEmail, registerWithEmail } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            if (isRegister) {
                await registerWithEmail(username, email, password);
            } else {
                await loginWithEmail(email, password);
            }
            navigate('/'); 
        } catch (err) {
            console.error("Authentication error:", err);
     
            if (err.response) {
                setError(err.response.data.message || 'An error occurred.');
            } else if (err.request) {
                setError('Cannot connect to the server. Please try again later.');
            } else {
                setError('An unexpected error occurred. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = () => {
        window.location.href = `${API_URL}/api/auth/google/login`;
    };

    return (
        <div className="w-full max-w-md">
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                {isRegister ? 'Create a new account' : 'Sign in to your account'}
            </h2>
            
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                 {/* The Username field is only shown on the registration form */}
                 {isRegister && (
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <div className="mt-1">
                            <input id="username" name="username" type="text" required value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
                        </div>
                    </div>
                )}
                
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                    <div className="mt-1">
                        <input id="email" name="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <div className="mt-1">
                        <input id="password" name="password" type="password" autoComplete={isRegister ? "new-password" : "current-password"} required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
                    </div>
                </div>
                
                {error && (<p className="text-sm text-red-600 text-center">{error}</p>)}

                <div>
                    <button type="submit" disabled={loading} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50">
                        {loading ? 'Processing...' : (isRegister ? 'Sign Up' : 'Sign In')}
                    </button>
                </div>
            </form>

            <div className="mt-6">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">OR</span>
                    </div>
                </div>

                <div className="mt-6">
                    <button onClick={handleGoogleSignIn} className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <svg className="w-5 h-5 mr-2" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 381.5 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 126 21.2 177 55.5l-63.5 63.5C335.5 95.3 294.8 80 248 80c-82.8 0-150.5 67.7-150.5 150.5S165.2 386 248 386c47.5 0 88.3-22.3 115.8-57.4l63.5 63.5C379.5 470.8 318.3 504 248 504z"></path></svg>
                        Sign in with Google
                    </button>
                </div>
            </div>
            
            <div className="mt-6 text-center text-sm">
                {isRegister ? (
                    <p className="text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Sign In
                        </Link>
                    </p>
                ) : (
                    <p className="text-gray-600">
                        Don't have an account?{' '}
                        <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Sign Up
                        </Link>
                    </p>
                )}
            </div>
        </div>
    );
};

export default AuthForm;