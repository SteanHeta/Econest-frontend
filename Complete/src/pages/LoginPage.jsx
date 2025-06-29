import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import GoogleSignInButton from '../components/GoogleSignInButton';

const LoginPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                
                <AuthForm isRegister={false} />
                
                <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300"></div></div>
                    <div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-gray-500">OR</span></div>
                </div>
                
                <GoogleSignInButton />

                <div className="text-sm text-center mt-6">
                    <p className="text-gray-600">
                        Don't have an account? <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;