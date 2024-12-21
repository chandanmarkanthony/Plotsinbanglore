import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Plotslist() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('https://leadapi.homebble.in/propertyRoute/getAllproperties')
      .then((response) => response.json())
      .then((data) => {
        console.log('API Response:', data);
        if (data.Allproperties && Array.isArray(data.Allproperties)) {
          const plotsdata = data.Allproperties.filter((res) => res.property_type === 'Plots');
          setProperties(plotsdata);
        } else {
          console.error('Unexpected response format:', data);
        }
      })
      .catch((error) => {
        console.error('Error fetching properties:', error);
      });
  }, []);

  return (
    <section className="container-fluid mx-auto px-4 md:px-24 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold">Latest Plots</h2>
        <Link to="/" className="text-gray-600 hover:text-black flex items-center">
          Plots List &darr;
        </Link>
      </div>
      <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-4">
        {properties.length > 0 ? (
          properties.map((property, index) => (
            <div
              key={index}
              className="relative overflow-hidden shadow-lg group transition-all duration-500"
            >
              <a
                href={`/property-details/${((property.project_Name).toLowerCase()).replace(/ /g, "-")}/${property.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={property.banner}
                  alt={property.project_Name}
                  className="w-full md:h-96 h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </a>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-start text-left p-4 transition-all duration-500 group-hover:translate-y-[-60px]">
                <a
                  href={`/property-details/${((property.project_Name).toLowerCase()).replace(/ /g, "-")}/${property.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-white text-lg md:text-3xl font-semibold mb-2">
                    {property.project_Name}
                  </h3>
                </a>
                <a
                  href={`/property-details/${((property.project_Name).toLowerCase()).replace(/ /g, "-")}/${property.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-white mb-3 text-sm md:text-lg border-2 border-green-500 p-2 px-3 rounded md:rounded-full">
                    STARTING @ {property.starting_Price}
                  </p>
                </a>
                <a
                  href={`/property-details/${((property.project_Name).toLowerCase()).replace(/ /g, "-")}/${property.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-green-500 mt-2 inline-block font-semibold"
                >
                  Click here to view &rarr;
                </a>
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
