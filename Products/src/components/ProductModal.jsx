// ====== FILE: src/components/ProductModal.jsx (Corrected) ======

import React from 'react';

const CloseIcon = () => (<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>);
const ImagePlaceholderIcon = () => (<svg className="h-24 w-24 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5z"/></svg>);
const StarIcon = () => (<svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.868 2.884c.321-.662 1.215-.662 1.536 0l1.681 3.46c.154.316.46.533.808.58l3.82.555c.748.108 1.047 1.023.498 1.553l-2.764 2.695c-.25.242-.364.59-.302.928l.652 3.803c.128.745-.654 1.322-1.33.974l-3.41-1.792c-.288-.152-.632-.152-.92 0l-3.41 1.792c-.676.348-1.458-.23-1.33-.974l.652-3.803c.062-.338-.052-.686-.302-.928L2.488 9.032c-.549-.53-.25-1.445.498-1.553l3.82-.555c.348-.047.654-.264.808-.58l1.681-3.46z" clipRule="evenodd"/></svg>);

const ProductModal = ({ product, onClose, onAddToCart }) => {
    if (!product) return null;

    const handleAddToCartClick = () => {
        onAddToCart(product);
        onClose();
    };

    return (
        <div className="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose}></div>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                    <div className="relative flex w-full max-w-lg transform text-left text-base transition">
                        <div className="relative flex w-full flex-col overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8 rounded-xl">
                            <button type="button" onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Close</span>
                                <CloseIcon />
                            </button>
                            <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                                <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5 flex items-center justify-center">
                                    {product.image_url ? (
                                        <img src={product.image_url} alt={product.name} className="object-cover object-center w-full h-full" />
                                    ) : (
                                        <ImagePlaceholderIcon />
                                    )}
                                </div>
                                <div className="sm:col-span-8 lg:col-span-7 flex flex-col h-full">
                                    <div>
                                        <p className="text-sm font-medium text-green-600">{product.brand}</p>
                                        <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.name}</h2>
                                    </div>
                                    <section className="mt-3">
                                        <div className="flex items-baseline gap-2">
                                            <p className="text-2xl text-gray-900">${product.price}</p>
                                            {product.original_price && <p className="text-md text-gray-400 line-through">${product.original_price}</p>}
                                        </div>
                                        <div className="mt-3 flex items-center">
                                            <StarIcon />
                                            <p className="ml-1 text-sm text-gray-700 font-semibold">{product.rating} <span className="text-gray-500 font-normal">({product.reviews} reviews)</span></p>
                                        </div>
                                    </section>
                                    <section className="mt-6">
                                        <h3 className="text-sm font-medium text-gray-900">Features</h3>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {/* FIX: Add Array.isArray check to prevent crash if data is not an array */}
                                            {Array.isArray(product.labels) && product.labels.map((label) => <span key={label} className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">{label}</span>)}
                                            {Array.isArray(product.features) && product.features.map((feature) => <span key={feature} className="rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-800">{feature}</span>)}
                                        </div>
                                    </section>
                                    <div className="mt-auto pt-6">
                                        <button type="button" onClick={handleAddToCartClick} className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;