import React from 'react';

const NewsletterSubscribe = () => (
    <div className="rounded-lg border-2 border-green-200 bg-green-50 p-6">
        <h3 className="text-lg font-semibold text-gray-900">Stay Updated</h3>
        <p className="mt-1 text-sm text-gray-600">Get weekly eco-tips and sustainability news delivered to your inbox.</p>
        <form className="mt-4 space-y-3">
            <input
                type="email"
                placeholder="Your email address"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
            />
            <button
                type="submit"
                className="w-full rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700"
            >
                Subscribe
            </button>
        </form>
    </div>
);
export default NewsletterSubscribe;