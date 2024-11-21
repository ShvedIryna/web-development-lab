import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import PlacePage from './pages/PlacePage';
import { PlaceProvider } from './components/place_context/PlaceContext';

function App() {
  return (
    <PlaceProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/place/:id" element={<PlacePage />} />
        </Routes>
      </Router>
    </PlaceProvider>
  );
}

export default App;