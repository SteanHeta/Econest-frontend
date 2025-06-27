// ====== FILE: src/components/Cart.jsx ======

import React from 'react';
import { useCart } from '../context/CartContext';
import CheckoutForm from './CheckoutForm';

const CloseIcon = () => (<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>);

const CartItem = ({ item }) => {
    const { updateQuantity, removeFromCart } = useCart();
    return (
        <li className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img src={item.product.imageUrl} alt={item.product.name} className="h-full w-full object-cover object-center"/>
            </div>
            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>{item.product.name}</h3>
                        <p className="ml-4">${(item.product.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{item.product.brand}</p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                    <div className="flex items-center border border-gray-200 rounded">
                       <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="px-2 py-1 text-gray-500 hover:text-black">-</button>
                       <p className="px-3 py-1 text-gray-700">{item.quantity}</p>
                       <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="px-2 py-1 text-gray-500 hover:text-black">+</button>
                    </div>
                    <div className="flex">
                        <button onClick={() => removeFromCart(item.product.id)} type="button" className="font-medium text-green-600 hover:text-green-500">Remove</button>
                    </div>
                </div>
            </div>
        </li>
    );
};

const Cart = () => {
    const { isCartOpen, closeCart, cartItems, totalPrice } = useCart();

    if (!isCartOpen) return null;

    return (
        <div className="relative z-50" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            {/* Backdrop */}
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={closeCart}></div>

            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <div className="pointer-events-auto w-screen max-w-md">
                            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                    <div className="flex items-start justify-between">
                                        <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Your Cart</h2>
                                        <div className="ml-3 flex h-7 items-center"><button type="button" onClick={closeCart} className="-m-2 p-2 text-gray-400 hover:text-gray-500"><CloseIcon /></button></div>
                                    </div>
                                    <div className="mt-8">
                                        <div className="flow-root">
                                            {cartItems.length > 0 ? (
                                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                    {cartItems.map(item => <CartItem key={item.product.id} item={item} />)}
                                                </ul>
                                            ) : (
                                                <p className="text-center text-gray-500">Your cart is empty.</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {cartItems.length > 0 && (
                                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <p>Subtotal</p>
                                            <p>${totalPrice.toFixed(2)}</p>
                                        </div>
                                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                        <CheckoutForm />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;