import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
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
import { useParams } from "react-router-dom";
import axios from 'axios';
import Form from './Form';

const PropertyDetails = () => {
    const { id,project_name } = useParams();
    const [property, setProperties] = useState({});
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const formTimeout = setTimeout(() => {
            setShowForm(true);
        }, 5000);

        return () => clearTimeout(formTimeout);
    }, []);

    useEffect(() => {
        let formInterval;
        if (showForm) {
            formInterval = setInterval(() => {
                setShowForm(false);
                setTimeout(() => {
                    setShowForm(true);
                }, 5000);
            }, 20000);
        }

        return () => clearInterval(formInterval);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`https://leadapi.homebble.in/propertyRoute/getpropertyById?PropertyId=${id}`);
            setProperties(data.properties);
        };
        fetchData();
    }, [id]);
    const seo_description = property?.seo_description ? JSON.parse(property?.seo_description) : []
 
    return (
        <div>
            <Helmet>
                <title>{property.seo_title || "Default SEO Title"}</title>
                <meta name="description" content={seo_description || "Default SEO Description"} />
                <meta name="keywords" content={property.seo_keywords ? (JSON.parse(property.seo_keywords)): "default, keywords"} />
            </Helmet>

            <Header logo={property.Property_logo} />
            <Banner property={property} />
            <OverView property={property} />
            <FloorPlan floorPlans={property} />
            <ProjectHighlights highlights={property} />
            <Amenities amenities={property} />
            {showForm && <Form propertyform={property} />}
            <Gallery gallery={property} />
            <Location property={property} />
            <About about={property} />
            <Footer property={property} />
        </div>
    );
}

export default PropertyDetails;
