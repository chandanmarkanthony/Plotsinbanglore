  import React, { useState, useEffect } from 'react';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import Navbar from './Navbar';
  import BannerMain from './BannerMain';
  import Plotslist from './Plotslist';
  import Footer from './Footer';
  import PropertyDetails from './PropertyPages/PropertyDetails';

  function App() {
    const [propertyId, setPropertyId] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to inject GTM script dynamically for the specific block
    const loadGTM = (gtmId) => {
      const existingScript = document.getElementById('gtm-script');
      if (!existingScript) {
        const script = document.createElement('script');
        script.async = true;
        script.id = 'gtm-script';
        script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
        document.head.appendChild(script);

        // Initialize dataLayer for GTM
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
