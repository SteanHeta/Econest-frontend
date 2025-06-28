import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext'; 

const CartIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962-.328 1.103-.84l3.15-8.25a.75.75 0 00-.14-.882l-2.25-2.25a.75.75 0 00-1.06 0L16.5 7.5H5.25l-.622-2.322A.75.75 0 003.877 4.5H2.25v.75zM16.5 21a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-8.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
    />
  </svg>
);

const Header = () => {
  const { openCart, totalItems } = useCart();
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    alert("You have been logged out.");
  };

  const activeLinkClass = "text-sm font-semibold leading-6 text-green-600";
  const inactiveLinkClass = "text-sm font-semibold leading-6 text-gray-900 hover:text-green-600";

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <NavLink to="/" className="flex items-center gap-2 -m-1.5 p-1.5">
            <img
              className="h-8 w-auto"
              src="https://media.canva.com/v2/image-resize/format:JPG/height:452/quality:92/uri:ifs%3A%2F%2FM%2F129bc6b4-1598-4f3c-9333-ae78825dd8b7/watermark:F/width:800?csig=AAAAAAAAAAAAAAAAAAAAAHAu0fdM9bu8p6lcpL0jDwPoI7hUgdkDZ4E2zwnUKce6&exp=1750939057&osig=AAAAAAAAAAAAAAAAAAAAACwg-bML92X9nWQdVq9gkSmGCBcy7wSJpziS6VbflNUb&signer=media-rpc&x-canva-quality=screen"
              alt="Econest Logo"
            />
            <span className="text-2xl font-bold text-gray-900">ECONEST</span>
          </NavLink>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <NavLink to="/" className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}>Home</NavLink>
          <NavLink to="/products" className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}>Products</NavLink>
          <NavLink to="/brands" className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}>Brands</NavLink>
          <NavLink to="/community" className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}>Community</NavLink>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-x-4">
          {isAuthenticated ? (
            <>
              <NavLink to="/profile" className="text-sm font-semibold hover:text-green-700">
                Welcome, {user ? user.username : 'User'}
              </NavLink>
              <button
                onClick={handleLogout}
                className="rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-md">
                Sign In
              </NavLink>
              <NavLink to="/register" className="rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700">
                Join Now
              </NavLink>
            </>
          )}

          <div className="ml-4 flow-root lg:ml-6">
            <button onClick={openCart} className="group -m-2 flex items-center p-2 relative">
              <CartIcon />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
                  {totalItems}
                </span>
              )}
              <span className="sr-only">items in cart, view bag</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
