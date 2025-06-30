import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { useCart } from '../context/CartContext';
import FilterPanel from '../components/FilterPanel';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { getProducts } from '../services/api';

const SearchIcon = () => (<svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" /></svg>);
const FilterIcon = () => (<svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.572a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" /></svg>);
const ChevronDownIcon = () => (<svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>);

const ProductsPage = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortKey, setSortKey] = useState('popular');
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);
    const [activeFilters, setActiveFilters] = useState({ labels: new Set() });

    const { addToCart } = useCart();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getProducts();
                setAllProducts(response.data);
            } catch (e) {
                setError("Could not load products. Please check that your backend server is running and try again.");
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        let products = [...allProducts];
        if (searchTerm) { products = products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.brand.toLowerCase().includes(searchTerm.toLowerCase())); }
        if (activeFilters.labels.size > 0) {
            products = products.filter(p => {
                const productFeatures = Array.isArray(p.features) ? p.features : [];
                const productLabels = Array.isArray(p.labels) ? p.labels : [];
                const productTags = new Set([...productFeatures, ...productLabels]);
                return [...activeFilters.labels].every(filterLabel => productTags.has(filterLabel));
            });
        }
        switch (sortKey) {
            case 'price-asc': products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)); break;
            case 'price-desc': products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price)); break;
            case 'rating-desc': products.sort((a, b) => b.rating - a.rating); break;
            default: break;
        }
        setDisplayedProducts(products);
    }, [allProducts, searchTerm, sortKey, activeFilters]);

    const handleAddToCart = (product) => {
        addToCart(product);
        alert(`"${product.name}" was added to your cart!`);
    };

    const renderContent = () => {
        if (loading) return <LoadingSpinner />;
        if (error) return <ErrorMessage title="Oops! Something went wrong." message={error} />;
        if (displayedProducts.length === 0 && !searchTerm) return <p className="text-center text-gray-500 mt-8">No products available.</p>;
        if (displayedProducts.length === 0 && searchTerm) return <p className="text-center text-gray-500 mt-8">No products found for "{searchTerm}".</p>;
        return (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {displayedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} onCardClick={() => setSelectedProduct(product)} />
                ))}
            </div>
        );
    };

    return (
        <main className="bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <header className="text-center mb-12"><h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Eco-Friendly Products</h1><p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Discover sustainable products from trusted local and eco-conscious brands.</p></header>
                <div className="mb-6 flex flex-col md:flex-row items-center gap-4">
                    <div className="relative w-full md:flex-1"><div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"><SearchIcon /></div><input type="search" placeholder="Search eco-friendly products..." className="block w-full rounded-lg border-gray-300 py-2.5 pl-10 pr-4 shadow-sm focus:border-green-500 focus:ring-green-500" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} /></div>
                    <div className="flex w-full md:w-auto items-center gap-4">
                        <div className="relative w-full md:w-auto"><select className="w-full appearance-none rounded-lg border-gray-300 py-2.5 pl-3 pr-8 shadow-sm focus:border-green-500 focus:ring-green-500" value={sortKey} onChange={(e) => setSortKey(e.target.value)}><option value="popular">Sort by</option><option value="price-asc">Price: Low to High</option><option value="price-desc">Price: High to Low</option><option value="rating-desc">Highest rated</option></select><div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"><ChevronDownIcon /></div></div>
                        <button onClick={() => setIsFiltersVisible(!isFiltersVisible)} className="flex w-full md:w-auto items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 font-semibold text-gray-700 shadow-sm hover:bg-gray-50"><FilterIcon /><span>Filters</span></button>
                    </div>
                </div>
                {isFiltersVisible && <div className="mb-6"><FilterPanel activeFilters={activeFilters} onFilterChange={setActiveFilters} /></div>}
                {renderContent()}
            </div>
            <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onAddToCart={handleAddToCart} />
        </main>
    );
};
export default ProductsPage;