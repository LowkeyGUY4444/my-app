import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLayout from './components/Layout/UserLayout';
import Home from './pages/Home';
import { Toaster } from 'sonner';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import CollectionPage from './pages/CollectionPage';
import ProductDetails from './components/Products/ProductDetails';
import ScrollToTop from './components/Common/ScrollToTop';
import Checkout from './components/Cart/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';





const App = () => {
  return (
    <BrowserRouter>
    <Toaster position="top-right" />
    <ScrollToTop />
      <Routes>       
        {/* User Layout */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />  
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />'
          <Route path="/collections/:collection" element={<CollectionPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orderconfirmation" element={<OrderConfirmation  />} />
        </Route>

        {/* Admin Layout */}
        <Route>
          
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}; 

export default App
