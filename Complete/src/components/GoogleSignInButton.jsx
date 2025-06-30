import React from 'react';
const API_URL = import.meta.env.VITE_API_URL;
const GoogleIcon = () => ( <svg className="w-5 h-5 mr-3" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039L38.802 8.94C34.336 4.966 29.475 3 24 3 12.358 3 3 12.358 3 24s9.358 21 21 21-21-9.358 21-21c0-1.328-.131-2.617-.389-3.917z"/><path fill="#FF3D00" d="M6.306 14.691c-1.242 2.506-1.956 5.37-1.956 8.309s.714 5.803 1.956 8.309L12.04 29.471c-.607-1.782-.956-3.72-.956-5.78s.349-4.008.956-5.78L6.306 14.691z"/><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-5.637-4.381C29.633 36.602 26.956 38 24 38c-3.866 0-7.22-1.722-9.288-4.407l-5.712 4.418C12.238 41.593 17.693 44 24 44z"/><path fill="#1976D2" d="M43.611 20.083L43.595 20 42 20H24v8h11.303c-.792 2.237-2.231 4.16-4.082 5.571l5.637 4.381c3.42-3.133 5.55-7.742 5.55-12.952 0-1.328-.131-2.617-.389-3.917z"/></svg> );
const GoogleSignInButton = () => {
    const googleLoginUrl = `${API_URL}/api/auth/google/login`;

    return (
        <a 
            href={googleLoginUrl}
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
        >
            <GoogleIcon />
            <span>Sign in with Google</span>
        </a>
    );
};

export default GoogleSignInButton;