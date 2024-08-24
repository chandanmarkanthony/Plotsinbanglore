import React, { useState, useRef, useEffect } from 'react';
import { TbBeachOff } from "react-icons/tb";
import { amenitiesData } from './DataJson'
import Form from './Form';

function Amenities() {

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
  const toggleForm = () => {
      setShowForm(prevState => !prevState);
  };

  const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
          setShowForm(false);
      } 
  };

  useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, []);
  return (
    <div>
      <div className="text-center py-10" id='amenities'>
        <h2 className="text-xl font-bold mb-5 border-b-2 border-green-500 inline-block">Amenities</h2>
        <div className="mx-auto grid grid-cols-1 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-screen-xl justify-center items-center py-10 px-5">
          {amenitiesData.map((amenity, index) => (
            <div className="hover-rotate bg-white p-6 rounded-xl shadow-xl flex flex-col items-center justify-center md:h-48 md:w-72 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-green-500 hover:text-white" key={index}>
            <div className="icon-wrapper">
              {amenity.icon}
            </div>
            <p className="text-[10px] md:text-sm lg:text-lg xl:textlg font-medium ">{amenity.name}</p>
          </div>
          ))}
        </div>
        <button className="mx-auto bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"  onClick={toggleForm}>
          
          <TbBeachOff className="inline-block mr-2 text-xl" />
          More Amenities
        </button>
      </div>
      {showForm && <div ref={formRef}><Form onClose={toggleForm} /></div>}
    </div>

  );
}

export default Amenities;
