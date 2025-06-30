import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 
const DashboardPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    navigate('/'); 
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p>Loading user data...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50/70 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h1 className="text-3xl font-bold text-gray-800">Your Dashboard</h1>
          <button 
            onClick={handleLogout} 
            className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>

        <div>
          <h2 className="text-2xl text-gray-700">
            Welcome back, <span className="text-green-600 font-semibold">{user.username}</span>!
          </h2>
          <p className="mt-2 text-gray-500">
            Your registered email is: <span className="font-medium text-gray-800">{user.email}</span>
          </p>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800">Account Details</h3>
            <div className="mt-4 p-4 bg-gray-100 rounded-md text-sm text-gray-700 overflow-x-auto">
              <pre>{JSON.stringify(user, null, 2)}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;