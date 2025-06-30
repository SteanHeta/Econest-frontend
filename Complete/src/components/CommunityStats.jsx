import React from 'react';

const stats = [
    { label: 'Active Members', value: '12,450' },
    { label: 'Tips Shared', value: '3,280' },
    { label: 'Articles Published', value: '450' },
    { label: 'CO2 Saved (tons)', value: '125.6' },
];

const CommunityStats = () => (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900">Community Stats</h3>
        <ul className="mt-4 space-y-3">
            {stats.map(stat => (
                <li key={stat.label} className="flex justify-between text-sm">
                    <span className="text-gray-600">{stat.label}</span>
                    <span className="font-semibold text-green-600">{stat.value}</span>
                </li>
            ))}
        </ul>
    </div>
);
export default CommunityStats;