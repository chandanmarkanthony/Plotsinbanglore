import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';  // Import Helmet
import Navbar from './Navbar';
import BannerMain from './BannerMain';
import Plotslist from './Plotslist';
import Footer from './Footer';
import PropertyDetails from './PropertyPages/PropertyDetails';

function App() {
  const [propertyId, setPropertyId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadGTM = (gtmId) => {
    const existingScript = document.getElementById('gtm-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.async = true;
      script.id = 'gtm-script';
      script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    }
  };

  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              {/* Inject GTM-MGVCQKX3 for this specific block */}
              {useEffect(() => {
                loadGTM('GTM-MGVCQKX3');
              }, [])}

              <Helmet>
                <title>Plots for Sale in Bangalore | Villa Plots in Bangalore</title>
                <meta name="description" content="Explore premium villa plots for sale in Bangalore's prime locations. Build your dream home with well-developed infrastructure and top amenities. Book your plot today!" />
                <meta name="keywords" content="plots in bangalore, land in bangalore, site in bangalore, bungalow plot for sale, residential plots, plots for sale in bangalore, gated community plots in bangalore, villa plots in bangalore, site for sale in bangalore, villa plots in north bangalore, plots in north bangalore, land for sale in bangalore, villa plots in sarjapur road, plotted development in north bangalore, buy land in bangalore" />
                <meta property="og:title" content="Plots for Sale in Bangalore | Villa Plots in Bangalore" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.plotinbangalore.in/" />
                <meta property="og:image" content="" />
                <meta property="og:site_name" content="Plot in Bangalore" />
                <meta property="og:description" content="Explore premium villa plots for sale in Bangalore's prime locations. Build your dream home with well-developed infrastructure and top amenities. Book your plot today!" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.plotinbangalore.in/" />
              </Helmet>

              <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
              <BannerMain isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
              <Plotslist setPropertyId={setPropertyId} />
              <Footer />
            </>
          }
        />

        {/* Property Details Page */}
        <Route
          path="/property-details/:project_name/:id"
          element={<PropertyDetails propertyId={propertyId} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
