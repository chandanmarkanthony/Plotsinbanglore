import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import BannerMain from './BannerMain';
import Plotslist from './Plotslist';
import Footer from './Footer';
import PropertyDetails from './PropertyPages/PropertyDetails';

function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={
          <> <Navbar />
            <BannerMain />
            <Plotslist />
            <Footer />
          </>
        } />
        
       
        <Route path="/property-details/:id" element={<PropertyDetails />} />
      </Routes>
     
    </Router>
  );
}

export default App;
