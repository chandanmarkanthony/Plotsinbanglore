import React, { useEffect,useRef,useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import {locationData} from './DataJson'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay ,faPause} from '@fortawesome/free-solid-svg-icons';
import Form from './Form';

function Location() {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'scrollEvent',
        scrollDepth: window.scrollY,
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  const formopen=()=>{
    
    setShowForm(prevState => !prevState);
  }
  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
        setShowForm(false);
    }
};
  return (
    <div className="text-center py-10" id='location'>
      <h2 className="text-2xl font-bold mb-8 border-b-2 border-green-500 inline-block">Virtual / Location</h2>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-xl p-5">
      <div className="flex flex-col justify-center items-center rounded-lg">
      <h2 className="text-2xl font-bold mb-8 border-b-2 border-green-500 inline-block">
        {locationData.virtualTour.heading}
      </h2>
      <div className="relative w-full h-64 md:h-96 rounded-lg shadow-md">
        <img
        onClick={formopen}
          src={locationData.virtualTour.imageSrc}
          alt="Virtual"
          className="object-cover object-center w-full h-full rounded-lg"
        />
        <button
          className="absolute inset-0 flex justify-center items-center text-white text-5xl"
          onClick={formopen}
        >
          <FontAwesomeIcon icon={faPause} />
        </button>
      </div>
    </div>
        <div className="flex flex-col justify-center items-center rounded-lg">
          <h2 className="text-2xl font-bold mb-8 border-b-2 border-green-500 inline-block">{locationData.locationMap.heading}</h2>
          <img src={locationData.locationMap.imageSrc} alt="Map" className="object-cover object-center w-full h-full rounded-lg shadow-md" onClick={formopen} />
        
        </div>
      </div>
      <div className="mt-8 mx-auto max-w-screen-xl p-5 ">
        <ol className="flex flex-wrap text-left justify-center border-2 border-grey-700 rounded-sm shadow-lg p-4">
          {locationData.nearbyLocations.map((location, index) => (
            <li key={index} className="w-full md:w-1/2 px-4 py-3 sm:px-0 flex items-center text-start text-sm md:text-lg lg:text-lg xl:text-lg">
              <FaMapMarkerAlt className="mr-2 text-green-500" /> {location}
            </li>
          ))}
        </ol>
        {showForm && <div ref={formRef}><Form onClose={formopen} /></div>}
      </div>

    </div>
  );
}

export default Location;
