import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import BannerMain from './BannerMain';
import Plotslist from './Plotslist';
import Footer from './Footer';
import PropertyDetails from './PropertyPages/PropertyDetails';

function App() {
  const  [propertyId,setPropertyId]=useState("")
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={
          <> <Navbar />
            <BannerMain />
            <Plotslist setPropertyId={setPropertyId} />
            <Footer />
          </>
        } />
        
       
        <Route path="/property-details/:project_name/" element={<PropertyDetails propertyId={propertyId} />} />
      </Routes>
     
    </Router>
  );
}

export default App;
