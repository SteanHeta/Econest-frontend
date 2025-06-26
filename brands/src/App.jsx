// src/App.js
import React, { useEffect, useState } from 'react';
import StatsCard from './components/StatsCard';
import BrandCard from './components/BrandCard';

function App() {
  const [brands, setBrands] = useState([]);
  const [stats] = useState({
    verifiedBrands: 150,
    customerSatisfaction: 95,
    certifications: 50,
    products: 12000,
  });

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/brands')
      .then(response => {
        setBrands(response.data);
      })
      .catch(error => {
        console.error('Error fetching brands:', error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="text-center py-10 px-4">
        <h1 className="text-4xl font-bold mb-4">Sustainable Brands</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          Discover brands that are committed to environmental responsibility, ethical practices, and sustainable innovation.
          Each brand is verified for their certifications and sustainability practices.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 max-w-7xl mx-auto mb-10">
        <StatsCard title="Verified Brands" value={stats.verifiedBrands} />
        <StatsCard title="Customer Satisfaction" value={`${stats.customerSatisfaction}%`} />
        <StatsCard title="Certifications" value={stats.certifications} />
        <StatsCard title="Products" value={`${stats.products}+`} />
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-10 space-y-6">
        {brands.map(brand => (
          <BrandCard key={brand.name} brand={brand} />
        ))}
      </div>
    </div>
  );
}

export default App;