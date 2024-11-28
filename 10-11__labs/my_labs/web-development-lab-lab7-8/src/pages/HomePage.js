import React from "react";
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import PlaceView from '../components/places_grid/PlaceView';
import Footer from '../components/footer/Footer';

function HomePage() {
    return (
        <div>
            <Header />
            <Hero />
            <PlaceView />
            <Footer />
        </div>
    );
}

export default HomePage;