// src/components/FilterPanel.jsx

import React from 'react';

const sustainabilityLabels = [
    'Organic', 'Fair Trade', 'Carbon Neutral', 'Zero Waste', 'Recycled', 'Vegan', 'Plastic-Free', 'Local', 'BPA-Free', 'Durable', 'Renewable', 'Hemp', 'Solar'
];

// Reusable Checkbox Component
const CheckboxOption = ({ label, isChecked, onChange }) => (
    <div className="flex items-center">
        <input
            id={`filter-${label}`}
            name={label}
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
            checked={isChecked}
            onChange={onChange}
        />
        <label htmlFor={`filter-${label}`} className="ml-3 text-sm text-gray-600">
            {label}
        </label>
    </div>
);

const FilterPanel = ({ activeFilters, onFilterChange }) => {

    const handleLabelChange = (label) => {
        const newLabels = new Set(activeFilters.labels);
        if (newLabels.has(label)) {
            newLabels.delete(label);
        } else {
            newLabels.add(label);
        }
        onFilterChange({ ...activeFilters, labels: newLabels });
    };

    return (
        <div className="border border-gray-200 rounded-lg p-6 bg-white">
            <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-4">Filter Products</h3>
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                
                <div className="lg:col-span-3 xl:col-span-4">
                    <h4 className="text-sm font-semibold leading-6 text-gray-900">Sustainability Labels</h4>
                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-8 gap-y-3">
                        {sustainabilityLabels.map(label => (
                            <CheckboxOption 
                                key={label} 
                                label={label} 
                                isChecked={activeFilters.labels.has(label)}
                                onChange={() => handleLabelChange(label)}
                            />
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                     <div>
                        <h4 className="text-sm font-semibold leading-6 text-gray-900">Price Range</h4>
                        <div className="mt-4 flex items-center gap-2">
                            <input
                                type="number"
                                name="min-price"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-600 focus:ring-green-600 sm:text-sm"
                                placeholder="Min"
                                value={activeFilters.minPrice}
                                onChange={e => onFilterChange({...activeFilters, minPrice: e.target.value})}
                            />
                            <span className="text-gray-500">-</span>
                            <input
                                type="number"
                                name="max-price"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-600 focus:ring-green-600 sm:text-sm"
                                placeholder="Max"
                                value={activeFilters.maxPrice}
                                onChange={e => onFilterChange({...activeFilters, maxPrice: e.target.value})}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterPanel;