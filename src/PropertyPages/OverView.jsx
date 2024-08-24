import React, { useState, useRef, useEffect } from 'react';
import { FaRegBuilding, FaVectorSquare } from "react-icons/fa";
import { FaLocationDot, FaBed, FaKey, FaIndianRupeeSign } from "react-icons/fa6";
import { FaRegFilePdf } from "react-icons/fa";
import Form from './Form'; 

function OverView({ property }) {
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
    <div className='my-8 ' id='overview'>
      <div className='border border-green-600 rounded-lg m-2'>
        <h2 className="text-center text-xl font-bold mb-5">
          <span className="border-b-2 border-green-500">Overview</span>
        </h2>
        <div className='justify-center flex'>
          <h1 className="text-center text-2xl font-semibold border border-green-600 m-2 shadow-xl rounded-lg p-5">
            {property.project_Name}
          </h1>
        </div>
        <div className="my-10 mx-auto md:w-3/4 justify-items-center grid grid-cols-2 p-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
          <div className="flex items-center w-full flex-col lg:flex-row border border-green-600 m-2 shadow-xl rounded-lg p-4" style={{justifyContent:"space-around"}}>
            <p className='justify-center flex'>{<FaRegBuilding className="text-5xl text-green-500 mr-2" />}</p>
            <div className='flex flex-col justify-center line-clamp-1'>
              <span className="text-lg font-bold justify-center flex">Plot</span>
              <span className='justify-center md:text-sm flex line-clamp-1 text-center'>{property.apartmentStarts}</span>
            </div>
          </div>
          <div className="flex items-center w-full flex-col lg:flex-row border border-green-600 m-2 shadow-xl rounded-lg p-4" style={{justifyContent:"space-around"}}>
            <p className='justify-center flex'>{<FaLocationDot className="text-5xl text-green-500 mr-2" />}</p>
            <div className='flex flex-col justify-center line-clamp-1'>
              <span className="text-lg font-bold justify-center flex">Location</span>
              <span className='justify-center md:text-sm flex line-clamp-1 text-center'>{property.location}</span>
            </div>
          </div>
          {/* <div className="flex items-center w-full flex-col lg:flex-row border border-green-600 m-2 shadow-xl rounded-lg p-4" style={{justifyContent:"space-around"}}>
            <p className='justify-center flex'>{<FaBed className="text-5xl text-green-500 mr-2" />}</p>
            <div className='flex flex-col justify-center line-clamp-1'>
              <span className="text-lg font-bold justify-center flex">Bedrooms</span>
              <span className='justify-center md:text-sm flex line-clamp-1 text-center'>{property.bedrooms || "3 & 4 BHK's"}</span>
            </div>
          </div> */}
          <div className="flex items-center w-full flex-col lg:flex-row border border-green-600 m-2 shadow-xl rounded-lg p-4" style={{justifyContent:"space-around"}}>
            <p className='justify-center flex'>{<FaKey className="text-5xl text-green-500 mr-2" />}</p>
            <div className='flex flex-col justify-center line-clamp-1'>
              <span className="text-lg font-bold justify-center flex">Possession</span>
              <span className='justify-center md:text-sm flex line-clamp-1 text-center'>{property.Possession}</span>
            </div>
          </div>
          <div className="flex items-center w-full flex-col lg:flex-row border border-green-600 m-2 shadow-xl rounded-lg p-4" style={{justifyContent:"space-around"}}>
            <p className='justify-center flex'>{<FaVectorSquare className="text-5xl text-green-500 mr-2" />}</p>
            <div className='flex flex-col justify-center line-clamp-1'>
              <span className="text-lg font-bold justify-center flex">Dimension</span>
              <span className='justify-center md:text-sm flex line-clamp-1 text-center'>{`${property.from_Dimension } Sqft. to ${property.to_Dimension } Sqft.`}</span>
            </div>
          </div>
          <div className="flex items-center w-full flex-col lg:flex-row border border-green-600 m-2 shadow-xl rounded-lg p-4" style={{justifyContent:"space-around"}}>
            <p className='justify-center flex'>{<FaIndianRupeeSign className="text-5xl text-green-500 mr-2" />}</p>
            <div className='flex flex-col justify-center line-clamp-1'>
              <span className="text-lg font-bold justify-center flex">Price</span>
              <span className='justify-center md:text-sm flex line-clamp-1 text-center'>{`₹${property.starting_Price }`}</span>
            </div>
          </div>
        </div>
        <div className="text-center mb-3">
          <button 
            onClick={toggleForm}
            className="mx-auto bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out">
            <FaRegFilePdf className="inline-block mr-2 text-xl" />
            Download Brochure
          </button>
        </div>
        {showForm && <div ref={formRef}><Form onClose={toggleForm} /></div>}
      </div>
    </div>
  );
}

export default OverView;
