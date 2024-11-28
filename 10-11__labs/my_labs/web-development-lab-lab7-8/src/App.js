import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import PlacePage from './pages/PlacePage';
import CartPage from './pages/CartPage';
import { PlaceProvider } from './components/place_context/PlaceContext';
import Checkout from './pages/Checkout';
import SuccessPage from './pages/SuccessPage';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    
    <Provider store={store}>
      
      <PlaceProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/place/:id" element={<PlacePage />} />
            <Route path="/carts" element={<CartPage />} />
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/success' element={<SuccessPage/>}/>
          </Routes>
        </Router>
      </PlaceProvider>
    </Provider>
  );
}

export default App;
