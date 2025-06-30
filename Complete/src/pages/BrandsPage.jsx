import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BrandCard from '../components/BrandCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { getBrands } from '../services/api';

const stats = [
    { value: '150+', label: 'Verified Brands' },
    { value: '95%', label: 'Customer Satisfaction' },
    { value: '50+', label: 'Certifications' },
    { value: '12K+', label: 'Products' },
];

const BrandsPage = () => {
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const response = await getBrands();
                setBrands(response.data);
            } catch (e) {
                setError("Could not fetch brands from the server.");
                console.error("Failed to fetch brands:", e);
            } finally {
                setLoading(false);
            }
        };
        fetchBrands();
    }, []);

    if (loading) return <LoadingSpinner />;

    return (
        <div className="bg-gray-50/70">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Sustainable Brands</h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600">Discover brands that are committed to environmental responsibility, ethical practices, and sustainable innovation. Each brand is verified for their certifications and sustainability practices.</p>
                </div>

                <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                            <p className="text-4xl font-bold text-green-600">{stat.value}</p>
                            <p className="mt-2 text-base text-gray-500">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {error ? (
                    <ErrorMessage message={error} />
                ) : (
                    <div className="mt-16 space-y-12">
                        {brands.map((brand) => (
                            <BrandCard key={brand.id} brand={brand} />
                        ))}
                    </div>
                )}

                <div className="mt-24 rounded-lg bg-green-100/50 p-8 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">Join Our Brand Network</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-gray-600">
                        Are you a sustainable brand looking to connect with eco-conscious consumers? Join our marketplace and showcase your commitment to sustainability.
                    </p>
                    <div className="mt-6">
                        <Link to="/register" className="inline-block rounded-md bg-green-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-green-700">
                            Apply to Join
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandsPage;