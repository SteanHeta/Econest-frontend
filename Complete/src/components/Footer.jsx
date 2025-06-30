import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-emerald-400 border-t border-gray-200" aria-labelledby="footer-heading">
    <h2 id="footer-heading" className="sr-only">Footer</h2>
    <div className="max-w-7xl mx-auto py-12 px-6 sm:px-8 lg:py-16 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-200 pb-8">

        <div>
          <p className="text-2xl font-bold text-gray-900">🌱 EcoNest</p>
          <p className="mt-2 text-sm leading-6 text-gray-600 max-w-sm">
            Your marketplace for a sustainable future. Shop eco-friendly, live responsibly.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold text-gray-900">Explore</p>
          <NavLink to="/" className="text-sm text-gray-600 hover:text-green-600">Home</NavLink>
          <NavLink to="/products" className="text-sm text-gray-600 hover:text-green-600">Products</NavLink>
          <NavLink to="/brands" className="text-sm text-gray-600 hover:text-green-600">Brands</NavLink>
          <NavLink to="/community" className="text-sm text-gray-600 hover:text-green-600">Community</NavLink>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold text-gray-900">Connect</p>
          <a href="#" className="text-sm text-gray-600 hover:text-green-600">Instagram</a>
          <a href="#" className="text-sm text-gray-600 hover:text-green-600">Twitter</a>
          <a href="#" className="text-sm text-gray-600 hover:text-green-600">Facebook</a>
          <a href="#" className="text-sm text-gray-600 hover:text-green-600">Email Us</a>
        </div>
      </div>

      <div className="pt-8 md:flex md:items-center md:justify-between">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} EcoNest, Inc. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 mt-4 md:mt-0">
          Built with 🌿 by Team EcoNest
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
