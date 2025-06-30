import React, { useState } from 'react';

const ImagePlaceholderIcon = () => (<svg className="h-12 w-12 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5z"/></svg>);
const HeartIcon = () => (<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>);
const LocationPinIcon = () => (<svg className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.1.4-.27.61-.47.21-.2.4-.41.56-.63.17-.22.32-.45.46-.69.13-.24.25-.49.35-.75.1-.26.18-.52.25-.79.07-.27.12-.55.16-.83.04-.28.06-.56.07-.85.01-.29.01-.58.01-.87v-1.12a5.25 5.25 0 00-10.5 0v1.12c0 .29 0 .58.01.87.01.29.03.57.07.85.04-.28.09.56.16.83.07-.27.13.55.25.79.1.26.22.51.35.75.14.24.29.47.46.69.16.22.35.43.56.63.21.2.42.37.61.47.1.07.21.12.28.14l.018.008.006.003zM10 8.25a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd"/></svg>);
const StarIcon = () => (<svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.868 2.884c.321-.662 1.215-.662 1.536 0l1.681 3.46c.154.316.46.533.808.58l3.82.555c.748.108 1.047 1.023.498 1.553l-2.764 2.695c-.25.242-.364.59-.302.928l.652 3.803c.128.745-.654 1.322-1.33.974l-3.41-1.792c-.288-.152-.632-.152-.92 0l-3.41 1.792c-.676.348-1.458-.23-1.33-.974l.652-3.803c.062-.338-.052-.686-.302-.928L2.488 9.032c-.549-.53-.25-1.445.498-1.553l3.82-.555c.348-.047.654-.264.808-.58l1.681-3.46z" clipRule="evenodd"/></svg>);


const ProductCard = ({ product, onAddToCart, onCardClick }) => {
    const [isLiked, setIsLiked] = useState(false);

    if (!product) return null;

    const mainFeature = product.features && product.features.length > 0 ? product.features[0] : null;

    const handleWishlistClick = (e) => {
        e.stopPropagation();
        setIsLiked(!isLiked);
    };

    const handleAddToCartClick = (e) => {
        e.stopPropagation();
        onAddToCart(product);
    };

    return (
        <div onClick={() => onCardClick(product)} className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white p-2.5 shadow-sm transition-shadow hover:shadow-lg cursor-pointer">
            <div className="relative">
                <div className="aspect-square w-full rounded-lg bg-gray-100 flex items-center justify-center">
                    {product.imageUrl ? (
                        <img src={product.imageUrl} alt={product.name} className="h-full w-full object-cover"/>
                    ) : (
                        <ImagePlaceholderIcon />
                    )}
                </div>
                
                {mainFeature && (
                    <div className="absolute top-2.5 left-2.5">
                        <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white shadow">
                            {mainFeature}
                        </span>
                    </div>
                )}

                <button 
                    onClick={handleWishlistClick}
                    className={`absolute top-2.5 right-2.5 rounded-md p-1.5 transition-colors ${isLiked ? 'bg-red-100 text-red-500' : 'bg-white text-gray-500 hover:bg-gray-100'}`}
                    aria-label="Add to wishlist"
                >
                    <HeartIcon />
                </button>
            </div>
            
            <div className="flex flex-1 flex-col p-2 pt-3">
                <div className="flex justify-between text-sm text-gray-500">
                    <p className="font-semibold text-green-700">{product.brand}</p>
                    <div className="flex items-center gap-1">
                        <LocationPinIcon />
                        <span>{product.location}</span>
                    </div>
                </div>

                <h3 className="mt-1 text-base font-bold text-gray-900">{product.name}</h3>

                <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-baseline gap-1.5">
                        <p className="text-lg font-extrabold text-gray-900">${product.price}</p>
                        {product.originalPrice && (
                            <p className="text-sm text-gray-400 line-through">${product.originalPrice}</p>
                        )}
                    </div>
                    <div className="flex items-center gap-1 text-sm font-semibold text-gray-700">
                        <StarIcon />
                        <span>{product.rating}</span>
                        {product.reviews && (
                            <span className="font-normal text-gray-500">({product.reviews})</span>
                        )}
                    </div>
                </div>
                
                <div className="mt-3 flex flex-wrap gap-2 border-t border-gray-100 pt-3">
                    {product.labels && product.labels.map((label) => (
                        <span key={label} className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-semibold text-gray-700">
                            {label}
                        </span>
                    ))}
                </div>

                <div className="mt-4 flex-grow flex items-end">
                    <button
                        onClick={handleAddToCartClick}
                        className="w-full rounded-lg bg-green-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-green-700"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;