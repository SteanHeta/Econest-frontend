import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';
import { useCart } from '../hooks/useCart.jsx';

const CartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;

const Navbar = () => {
    const { user, logout } = useAuth();
    const { cartCount } = useCart();
    const activeLink = 'text-primary font-semibold border-b-2 border-primary';
    const inactiveLink = 'text-gray-600 hover:text-primary';

    return (
        <nav className="bg-white h-20 flex items-center justify-center sticky top-0 z-50 shadow-md w-full">
            <div className="flex justify-between items-center w-full max-w-7xl px-6">
                <NavLink to="/" className="text-3xl font-bold text-primary">Eco-Nest</NavLink>
                <ul className="hidden md:flex items-center space-x-8 text-lg">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? activeLink : inactiveLink}>Home</NavLink></li>
                    <li><NavLink to="/products" className={({ isActive }) => isActive ? activeLink : inactiveLink}>Products</NavLink></li>
                    <li><NavLink to="/brands" className={({ isActive }) => isActive ? activeLink : inactiveLink}>Our Brands</NavLink></li>
                    <li><NavLink to="/community" className={({ isActive }) => isActive ? activeLink : inactiveLink}>Community</NavLink></li>
                </ul>
                <div className="flex items-center space-x-4">
                    {user ? (
                        <>
                            <span className="text-gray-700 hidden sm:inline">Hi, {user.username}</span>
                            <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">Logout</button>
                        </>
                    ) : (
                        <div className="hidden md:flex items-center space-x-4">
                            <NavLink to="/login" className="text-primary font-medium hover:underline">Login</NavLink>
                            <NavLink to="/register" className="bg-primary text-white px-5 py-2 rounded-md hover:bg-primary-dark transition-colors">Sign Up</NavLink>
                        </div>
                    )}
                    <NavLink to="/cart" className="relative p-2 hover:bg-gray-100 rounded-full">
                        <CartIcon />
                        {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{cartCount}</span>}
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;