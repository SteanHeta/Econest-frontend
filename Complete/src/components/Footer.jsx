import React from 'react';
const Footer = () => (
    <footer className="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <div className="max-w-7xl mx-auto py-12 px-6 lg:py-16 lg:px-8">
            <div className="pb-8 border-b border-slate-200">
                <div className="flex flex-wrap justify-between gap-8">
                    <div className="space-y-8">
                        <p className="text-2xl font-bold text-gray-900">🌱 EcoNest</p>
                        <p className="text-sm leading-6 text-gray-600 max-w-xs">Your marketplace for a sustainable future.</p>
                    </div>

                </div>
            </div>
            <div className="pt-8 md:flex md:items-center md:justify-between">
                <p className="text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
                    © {new Date().getFullYear()} EcoNest, Inc. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
);
export default Footer;