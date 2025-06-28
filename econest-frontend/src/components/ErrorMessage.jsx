import React from 'react';

const ErrorMessage = ({ message }) => (
    <div className="text-center p-10 bg-red-50 text-red-700 rounded-lg max-w-2xl mx-auto my-8">
        <h3 className="font-bold text-lg">Oops! Something went wrong.</h3>
        <p className="mt-2">{message}</p>
    </div>
);
export default ErrorMessage;