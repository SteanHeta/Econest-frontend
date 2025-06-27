import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Cart from './components/Cart';
import ProductsPage from './pages/ProductsPage';
function App() {
  return (
      <CartProvider>
        <Router>
          <div className="App bg-gray-50/70 min-h-screen">
            <Header />
            <main>
              <Routes>
                <Route path="/products" element={<ProductsPage />} />
              </Routes>
            </main>
            <Cart/>
          </div>
        </Router>
      </CartProvider>
  );
}

export default App;