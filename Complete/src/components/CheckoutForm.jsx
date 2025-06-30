import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const CheckoutForm = () => {
    const { cartItems, totalPrice, clearCart } = useCart();
    const [billingDetails, setBillingDetails] = useState({
        name: '',
        email: '',
        address: '',
    });
    const [paymentMethod, setPaymentMethod] = useState('card');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBillingDetails(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckout = (e) => {
        e.preventDefault();
        if (cartItems.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        const orderData = {
            customer: billingDetails,
            items: cartItems.map(item => ({ id: item.product.id, quantity: item.quantity })),
            total: totalPrice.toFixed(2),
            paymentMethod,
        };

        console.log("--- SIMULATING CHECKOUT ---");
        console.log("Order Data:", orderData);
        
        alert(`Thank you for your order, ${billingDetails.name}! A confirmation has been sent to ${billingDetails.email}.`);
        
        clearCart();
    };

    return (
        <form onSubmit={handleCheckout} className="mt-6">
            <h3 className="text-lg font-medium text-gray-900">Checkout Details</h3>
            <div className="mt-4 space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" name="name" id="name" required value={billingDetails.name} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"/>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" name="email" id="email" required value={billingDetails.email} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"/>
                </div>
                <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Shipping Address</label>
                    <textarea name="address" id="address" rows="3" required value={billingDetails.address} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"></textarea>
                </div>
                 <div>
                    <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">Payment Method</label>
                    <select id="paymentMethod" name="paymentMethod" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
                        <option value="card">Credit / Debit Card</option>
                        <option value="cash">Cash on Delivery</option>
                    </select>
                </div>
            </div>
            <button type="submit" className="mt-6 w-full rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700">
                Place Order (${totalPrice.toFixed(2)})
            </button>
        </form>
    );
};

export default CheckoutForm;