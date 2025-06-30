import React from 'react';

const categories = [
    { name: 'Zero Waste', count: 12 },
    { name: 'Sustainable Fashion', count: 33 },
    { name: 'Energy Saving', count: 18 },
    { name: 'DIY', count: 36 },
    { name: 'Composting', count: 29 },
    { name: 'Green Technology', count: 52 },
];

const PopularCategories = () => (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900">Popular Categories</h3>
        <ul className="mt-4 space-y-3">
            {categories.map(cat => (
                 <li key={cat.name} className="flex justify-between items-center text-sm group cursor-pointer">
                    <span className="text-gray-600 group-hover:text-green-700">{cat.name}</span>
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800 group-hover:bg-green-100 group-hover:text-green-800">{cat.count}</span>
                </li>
            ))}
        </ul>
    </div>
);
export default PopularCategories;