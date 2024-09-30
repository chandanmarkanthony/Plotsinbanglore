import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp, IoCall } from "react-icons/io5";
import Form from "./Form";
import { initializeGTM, trackEvent } from "../ReactGA4";

const Banner = ({ property }) => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);
  useEffect(() => {
    initializeGTM
      ();
  }, []);

  const toggleForm = (elementName) => {
    setShowForm((prevState) => !prevState);
    trackEvent("Click", { element: elementName });
  };

  const handleClickOutside = (event, elementName) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setShowForm(false);
      trackEvent("Click", { element: elementName });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = (elementName) => {
    trackEvent("Click", { element: elementName });
  };
  const message = `Hi, I am interested in ${encodeURIComponent(property.project_Name)}. Can you share me all details,`;
  // Construct the WhatsApp link
  const whatsappUrl = `https://api.whatsapp.com/send?phone=+91${property.whatsapp_No}&text=${message}`;

  return (
    <div className="relative ">
      <img
        className="w-full md:h-[800px] bg-cover bg-center"
        src={property.banner}
        alt="Banner"
      />
      <div className="hidden md:block absolute w-full md:w-96 md:m-1 top-1 left-0 text-black bg-white  rounded-t-lg lg:ml-10">
        <h2 className="text-md text-center font-bold rounded-t-lg effetGradient ">{property.tag}</h2>
        <div className=" p-3 ">
          <p className="text-center text-2xl font-bold text-green-700  " style={{ paddingBottom: "10px" }}>
            {property.project_Name}
          </p>
          <p className="text-center text-bold border border-green-600 rounded-t-md font-medium  p-2">{property.location}</p>
          <p className="text-center ">{property.developer}</p>
          <div className="mt-4 ">
            <p className="mb-1 text-center bg-gray-200 p-1 rounded-t-lg">
              <span className="flex flex-row justify-center mb-[-23px]">
                <div className="w-1/2"> Land Parcel</div> :<div className="w-1/2 flex flex-start ml-3">{property.land_parcel}</div>
              </span>
              <br />
              <span className="flex flex-row justify-center mb-[-23px]">
                <div className="w-1/2"> Total Units</div> :
                <div className="w-1/2 flex flex-start ml-3 mb-2">{property.total_units}</div>
              </span>
              <br />
              {/* <span className="flex flex-row justify-center">
            <div className="w-1/2"> {property.detailsthree}</div> :<div className="w-1/2 flex flex-start ml-3">{property.typology}</div> 

          </span>
          <br /> */}
            </p>

            <div className="rounded-t-lg  bg-white   mt-[-10px] pt-3 ">
              <div className="text-center effetGradient p-2 mt-1 rounded-t-lg   ">
                {
                  property?.highlightsinvestmentOpportunity ? (

                    (() => {
                      try {
                        const highlightsArray = JSON.parse(property.highlightsinvestmentOpportunity);
                        return highlightsArray.map((res, index) => (
                          <p key={index} className="mb-2">
                            {res}
                          </p>
                        ));
                      } catch (error) {
                        console.error('Error parsing highlightsinvestmentOpportunity:', error);
                        return <p>Error parsing highlights.</p>;
                      }
                    })()
                  ) : (
                    <p>No highlights available</p>
                  )
                }

              </div></div>
            <div className="rounded-t-lg  bg-white   mt-[-10px] pt-3">
              <div className="text-center effetGradient animate-bounceIn mt-1 rounded-t-lg  ">
                <p className="mb-1 p-1">{property.investmentOpportunity}</p>
              </div>
            </div>

            <h3 className="mt-1 text-center font-normal">
              {property.apartmentStarts}
            </h3>
            <h2 className="text-center font-medium text-xl">
              {" "}
              &#x20b9; {property.starting_Price} Onwards
            </h2>
            <div className="m-2">
              <button
                onClick={() => toggleForm("Enquiry Button")}
                className="text-white font-bold py-2 px-6 rounded effetGradient mx-auto block"
              >
                Enquiry Now
              </button>
            </div>
            <div className="mb-4 mt-2 ">
              <h3 className="text-lg text-center font-semibold border border-green-600 rounded-lg mb-3 mt-3">
                Why you should consider <br /> {property.project_Name}?
              </h3>
              <ul className="list-none shadow-xl bg-gray-200 rounded-t-lg p-4 mt-1 ">
                {
                  property?.reasonsToConsider ? (
                    (() => {
                      try {
                        const reasonsToConsider = JSON.parse(property.reasonsToConsider);
                        return reasonsToConsider.slice(0, 3).map((res, index) => (
                          <p key={index} className="mb-2">
                            {res}
                          </p>
                        ));
                      } catch (error) {
                        console.error('Error parsing highlightsinvestmentOpportunity:', error);
                        return <p>Error parsing highlights.</p>;
                      }
                    })()
                  ) : (
                    <p>No reasonsToConsider available</p>
                  )
                }
              </ul>
            </div>
            <div className="flex  flex-col md:flex-row justify-center gap-2 ">
              <button className="text-white font-bold py-2 px-3 rounded effetGradient flex items-center justify-center w-full">
                <Link className="flex flex-wrap" to={whatsappUrl} onClick={() => handleClick("WhatsApp Link")} target="_blank">
                  <IoLogoWhatsapp className="mr-2" size={24} />
                  <span>WhatsApp</span>
                </Link>
              </button>
              <button className="text-white font-bold py-2 px-3 rounded effetGradient flex items-center justify-center w-full">
                <a
                  className="flex flex-wrap"
                  href={`tel:${property.phoneNumber}`}  // Use the `tel:` scheme to open the dialer
                  onClick={() => handleClick("Phone Link")}
                >
                  <IoCall className="mr-2" size={24} />
                  <span>{property.phoneNumber}</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      {showForm && (
        <div ref={formRef}>
          <Form onClose={() => toggleForm("Close Form")} propertyform={property} />
        </div>
      )}
      <div className="md:hidden ">
        <h2 className="text-md text-center font-bold effetGradient">{property.tag}</h2>
        <div className=" p-3 ">
          <h1 className="text-center text-xl font-bold text-green-700" style={{ paddingBottom: "10px" }}>
            {property.project_Name}
          </h1>
          <p className="text-center font-medium border border-green-600 rounded-t-md p-2">{property.location}</p>
          <p className="text-center font-bold  pt-2">{property.developer}</p>
          <div className="mt-4 ">
            <p className="mb-1 text-center bg-gray-200 p-1 rounded-t-lg">
              <span className="flex flex-row justify-center mb-[-23px]">
                <div className="w-1/2"> Land Parcel</div> :<div className="w-1/2 flex flex-start ml-3">{property.land_parcel}</div>
              </span>
              <br />
              <span className="flex flex-row justify-center mb-[-23px]">
                <div className="w-1/2"> Total Units</div> :
                <div className="w-1/2 flex flex-start ml-3 mb-2">{property.total_units}</div>

              </span>
              <br />
              {/* <span className="flex flex-row justify-center">
                <div className="w-1/2"> {property.detailsthree}</div> :<div className="w-1/2 flex flex-start ml-3">{property.typology}</div>

              </span>
              <br /> */}
            </p>

            <div className="rounded-t-lg  bg-white   mt-[-10px] pt-3 ">
              <div className="text-center effetGradient p-2 mt-1 rounded-t-lg   ">
                {
                  property?.highlightsinvestmentOpportunity ? (

                    (() => {
                      try {
                        const highlightsArray = JSON.parse(property.highlightsinvestmentOpportunity);
                        return highlightsArray.map((res, index) => (
                          <p key={index} className="mb-2">
                            {res}
                          </p>
                        ));
                      } catch (error) {
                        console.error('Error parsing highlightsinvestmentOpportunity:', error);
                        return <p>Error parsing highlights.</p>;
                      }
                    })()
                  ) : (
                    <p>No highlights available</p>
                  )
                }
              </div></div>
            <div className="rounded-t-lg  bg-white   mt-[-10px] pt-3">
              <div className="text-center effetGradient animate-bounceIn mt-1 rounded-t-lg  ">
                <p className="mb-1 p-1">{property.investmentOpportunity}</p>
              </div>
            </div>

            <h3 className="mt-1 text-center font-normal">
              {property.apartmentStarts}
            </h3>
            <h2 className="text-center font-medium text-xl">
              {" "}
              &#x20b9; {property.starting_Price} Onwards
            </h2>
            <div className="m-2">
              <button
                onClick={() => toggleForm("Enquiry Button")}
                className="text-white font-bold py-2 px-6 rounded effetGradient mx-auto block"
              >
                Enquiry Now
              </button>
            </div>
            <div className="mb-2 ">
              <h3 className="text-lg text-center font-semibold border border-green-600 rounded-lg shadow-xl mb-4   mt-3">
                Why you should consider <br /> {property.project_Name}?
              </h3>
              <ul className="list-none shadow-xl bg-gray-200 rounded-t-lg p-4 mt-1 mb-1 text-center">
                {
                  property?.reasonsToConsider ? (
                    (() => {
                      try {
                        const reasonsToConsider = JSON.parse(property.reasonsToConsider);
                        return reasonsToConsider.slice(0, 3).map((res, index) => (
                          <p key={index} className="mb-2">
                            {res}
                          </p>
                        ));
                      } catch (error) {
                        console.error('Error parsing highlightsinvestmentOpportunity:', error);
                        return <p>Error parsing highlights.</p>;
                      }
                    })()
                  ) : (
                    <p>No reasonsToConsider available</p>
                  )
                }
              </ul>
            </div>
            <div className="flex  flex-col md:flex-row justify-center gap-2 ">
              <button className="text-white font-bold py-2 px-3 rounded effetGradient flex items-center justify-center w-full">
                <Link className="flex flex-wrap" to={whatsappUrl} onClick={() => handleClick("WhatsApp Link")} target="_blank">
                  <IoLogoWhatsapp className="mr-2" size={24} />
                  <span>WhatsApp</span>
                </Link>
              </button>
              <button className="text-white font-bold py-2 px-3 rounded effetGradient flex items-center justify-center w-full">
                <a
                  className="flex flex-wrap items-center justify-center w-full"
                  href={`tel:${property.phoneNumber}`}  // Use `tel:` scheme to open the dialer
                  onClick={() => handleClick("Phone Link")}  // Track the click event
                >
                  <IoCall className="mr-2" size={24} />
                  <span>{property.phoneNumber}</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
