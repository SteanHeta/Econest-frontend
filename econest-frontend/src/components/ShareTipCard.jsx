import React from 'react';

const ShareTipCard = () => (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
            <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311a7.5 7.5 0 00-7.5 0c-1.255 0-2.417.15-3.5.435a9.75 9.75 0 00-6.25 6.25v.168c0 .354.146.69.405.942a1.001 1.001 0 00.942.405h13.204a1.001 1.001 0 00.942-.405c.259-.252.405-.588.405-.942v-.168a9.75 9.75 0 00-6.25-6.25 42.632 42.632 0 00-3.5-.435z" /></svg>
            Share a Sustainability Tip
        </h3>
        <div className="mt-4">
            <textarea
                rows={3}
                className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm"
                placeholder="Share your eco-friendly tip with the community..."
            />
        </div>
        <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-2">
                <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">Zero Waste</span>
                <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">DIY</span>
                <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">Energy Saving</span>
            </div>
            <button className="rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700">Share Tip</button>
        </div>
    </div>
);
export default ShareTipCard;