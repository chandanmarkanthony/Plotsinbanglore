import React, { useEffect }      from 'react';
import Header from './Header';
import Banner from './Banner';
import OverView from './OverView';
import FloorPlan from './FloorPlan';
import ProjectHighlights from './ProjectHighlights';
import Amenities from './Amenities';
import Gallery from './Gallery';
import Location from './Location';
import About from './About';
import Footer from './Footer';

const PropertyDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Header />
            <Banner />
            <OverView />
            <FloorPlan />
            <ProjectHighlights />
            <Amenities />
            <Gallery />
            <Location />
            <About />
            <Footer />
        </div>
    );
}

export default PropertyDetails;
