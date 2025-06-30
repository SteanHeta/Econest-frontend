import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerWithEmail } from '../../services/authService';

const RegisterForm = () => { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); setLoading(true); setError('');
        try {
            const accessToken = await registerWithEmail(email, password);
            localStorage.setItem('econest_token', accessToken);
            navigate('/dashboard');
        } catch (err) {
            setError(err.code === 'auth/email-already-in-use' ? 'This email is already registered.' : 'An error occurred.');
        } finally { setLoading(false); }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-green" />
             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password (min. 6 characters)" required minLength="6" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-green" />
             {error && <p className="bg-error-red/10 text-error-red p-3 rounded-md text-sm font-medium">{error}</p>}
             <button type="submit" disabled={loading} className="w-full bg-primary-green text-white font-bold py-3 px-4 rounded-lg hover:bg-accent-green transition-colors duration-300 disabled:bg-gray-400">
                 {loading ? 'Creating Account...' : 'Create Account'}
             </button>
        </form>
    );
};
export default RegisterForm;