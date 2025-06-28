import React from 'react';
import { Link } from 'react-router-dom';

const TshirtIcon = () => <svg className="h-12 w-12 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" /></svg>;
const HomeIcon = () => <svg className="h-12 w-12 text-amber-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" /></svg>;
const DispenserIcon = () => <svg className="h-12 w-12 text-teal-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.03 1.125 0 1.13.094 1.976 1.057 1.976 2.192V7.5M8.25 7.5h7.5m-7.5 0l-1.093 1.093c-.524.524-.88 1.224-.966 1.957a4.5 4.5 0 00.322 2.672l.426.759A3.375 3.375 0 0011.25 15.75h1.5a3.375 3.375 0 002.966-2.271l.426-.759a4.5 4.5 0 00.322-2.672c-.086-.732-.442-1.433-.966-1.957L15.75 7.5" /></svg>;
const PhoneIcon = () => <svg className="h-12 w-12 text-slate-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0h3m-3 18h3" /></svg>;
const SaladIcon = () => <svg className="h-12 w-12 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 10.5v2.625a3.375 3.375 0 01-3.375 3.375h-1.5c-1.86 0-3.375-1.515-3.375-3.375V10.5m0 0a3.375 3.375 0 013.375-3.375h1.5a3.375 3.375 0 013.375 3.375m-7.5 0V5.625c0-1.86 1.515-3.375 3.375-3.375h1.5c1.86 0 3.375 1.515 3.375 3.375V10.5m-7.5 0h-1.5a3.375 3.375 0 00-3.375 3.375V15m0 0v1.125c0 1.86 1.515 3.375 3.375 3.375h1.5c1.86 0 3.375-1.515 3.375-3.375V15m-4.875-4.875v-.062c0-1.036.84-1.875 1.875-1.875h.062c1.036 0 1.875.84 1.875 1.875v.062m-1.875 0h-1.875" /></svg>;
const RunnerIcon = () => <svg className="h-12 w-12 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" /></svg>;
const SearchIcon = () => <svg className="h-5 w-5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" /></svg>;

const categories = [
    { name: 'Fashion', items: '245 items', icon: <TshirtIcon /> },
    { name: 'Home & Garden', items: '189 items', icon: <HomeIcon /> },
    { name: 'Personal Care', items: '156 items', icon: <DispenserIcon /> },
    { name: 'Electronics', items: '92 items', icon: <PhoneIcon /> },
    { name: 'Food & Beverage', items: '134 items', icon: <SaladIcon /> },
    { name: 'Sports & Outdoor', items: '87 items', icon: <RunnerIcon /> },
];

const HomePage = () => {
    return (
        <>
            <div className="bg-emerald-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">Discover <span className="bg-gradient-to-r from-green-500 via-emerald-500 via-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent"> Sustainable <span className="text-blue-600">Living</span></span></h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">Connect with eco-friendly brands, discover sustainable products, and join a community committed to making a positive environmental impact.</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link to="/products" className="rounded-md bg-green-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-green-700">Shop Products</Link>
                            <Link to="/community" className="text-base font-semibold leading-7 text-gray-900">Join the Community <span aria-hidden="true">→</span></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-green-50">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-center text-gray-900 sm:text-3xl">Shop by Category</h2>
                    <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-6 xl:gap-x-8">
                        {categories.map((category) => (
                            <Link key={category.name} to="/products" className="group relative text-center">
                                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200/80 transition-shadow hover:shadow-lg hover:border-gray-300 cursor-pointer">
                                    <div className="flex items-center justify-center h-16">{category.icon}</div>
                                </div>
                                <h3 className="mt-3 font-semibold text-gray-900">{category.name}</h3>
                                <p className="text-sm text-gray-500">{category.items}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
export default HomePage;