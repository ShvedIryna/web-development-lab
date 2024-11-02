import React from "react";
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import Places from '../components/places_grid/Places';
import Footer from '../components/footer/Footer';

function HomePage() {
    return (
        <div>
            <Header />
            <Hero />
            <Places />
            <Footer />
        </div>
    );
}

export default HomePage;
