import React from 'react';
import ScrollTop from './components/scroll/ScrollTop';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Destinations from './components/destinations/Destinations';
import Offer from './components/offer/Offer';
import Tours from './components/tours/Tours';
import Testimonials from './components/testimonials/Testimonials';
import DownloadApp from './components/download/Download';
import Footer from './components/footer/Footer';

const App = () => {
  return <>
    <ScrollTop />
    <Navbar />
    <Home />
    <Services />
    <Destinations />
    <Offer />
    <Tours />
    <Testimonials />
    <DownloadApp />
    <Footer />
  </>
}

export default App