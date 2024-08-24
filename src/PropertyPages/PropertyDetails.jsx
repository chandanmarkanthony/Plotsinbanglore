import React, { useEffect, useState }      from 'react';
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

const PropertyDetails = () => {
    const {id}=useParams()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [property,setProperties]=useState([])
    useEffect(()=>{
        const fetchData =async ()=>{
            const {data}=await axios.get(`https://leadapi.homebble.in/propertyRoute/getpropertyById?PropertyId=${id}`)
            setProperties(data.properties)
        }
        fetchData()
    },[])
    console.log("property.galleryData",property)
    return (
        <div>
            <Header logo={property.Property_logo}/>
            <Banner property={property} />
            <OverView property={property}  />
            <FloorPlan floorPlans={property}  />
            <ProjectHighlights highlights={property} />
            <Amenities />
            <Gallery gallery={property} />
            <Location  property={property}/>
            <About about={property}/>
            <Footer property={property}/>
        </div>
    );
}

export default PropertyDetails;
