// src/components/StatsCard.js
import React from 'react';

const StatsCard = ({ title, value }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
      <h2 className="text-3xl font-bold text-green-500">{value}</h2>
      <p className="text-gray-600 mt-2">{title}</p>
    </div>
  );
};

export default StatsCard;