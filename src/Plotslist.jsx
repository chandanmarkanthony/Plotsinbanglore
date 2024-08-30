import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Plotslist({setPropertyId}) {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('https://leadapi.homebble.in/propertyRoute/getAllproperties')
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data);
        if (data.Allproperties && Array.isArray(data.Allproperties)) {
          setProperties(data.Allproperties);
        } else {
          console.error('Unexpected response format:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching properties:', error);
      });
  }, []);

  return (
    <section className="container-fluid mx-auto px-4 md:px-24 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold">Latest Plots</h2>
        <Link to="/all-properties" className="text-gray-600 hover:text-black flex items-center">
          Plots List &rarr;
        </Link>
      </div>
      <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-4">
        {properties.length > 0 ? (
          properties.map((property, index) => (
            <div
              key={index}
              className="relative overflow-hidden shadow-lg group transition-all duration-500" 
              onClick={setPropertyId(property.id)}
            >
               <Link to={`/property-details/${((property.project_Name).toLowerCase()).replace(/ /g, "-")}`}>
               
               <img
                src={property.banner}
                alt={property.project_Name}
                className="w-full md:h-96 h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              </Link>
             
              <div
                className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-start text-left p-4 transition-all duration-500 group-hover:translate-y-[-60px]"
              >
                <Link to={`/property-details/${((property.project_Name).toLowerCase()).replace(/ /g, "-")}`}>
                  <h3 className="text-white text-lg md:text-3xl font-semibold mb-2">
                    {property.project_Name}
                  </h3>
                </Link>
                <Link to={`/property-details/${((property.project_Name).toLowerCase()).replace(/ /g, "-")}`}><p className="text-white mb-3 text-sm md:text-lg border-2 border-green-500 p-2 px-3  rounded md:rounded-full">STARTING @ {property.starting_Price}</p>  </Link>
                <Link to={`/property-details/${((property.project_Name).toLowerCase()).replace(/ /g, "-")}`}
                  className="text-white hover:text-green-500 mt-2 inline-block font-semibold"
                >
                  Click here to view &rarr;
                </Link>
              </div>
              <div
                className="absolute bottom-0 left-0 w-full bg-green-500 text-white text-sm md:text-lg p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
              >
                <div className="grid grid-cols-3 gap-2">
              
                  <div className="text-center">
                  <Link to={`/property-details/${((property.project_Name).toLowerCase()).replace(/ /g, "-")}`}>
                    <span className="block font-semibold">Possession</span>
                    <span className='text-base'>{property.Possession}</span>
                    </Link>
                  </div>
                  <div className="text-center">
                  <Link to={`/property-details/${((property.project_Name).toLowerCase()).replace(/ /g, "-")}`}>
                    <span className="block font-semibold">Type</span>
                    <span className='text-base'>{"Plots"}</span>
                    </Link>
                  </div>
                  <div className="text-center">
                  <Link to={`/property-details/${((property.project_Name).toLowerCase()).replace(/ /g, "-")}`}>
                    <span className="block font-semibold">Land</span>
                    <span className='text-base'>{property.land_parcel}</span>
                    </Link>
                  </div>
                
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No properties available.</p>
        )}
      </div>
    </section>
  );
}

export default Plotslist;
