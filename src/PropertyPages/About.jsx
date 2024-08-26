import React, { useState, useRef, useEffect } from "react";
import { aboutData } from "./DataJson";
import { FaRegFilePdf } from "react-icons/fa";
import Form from "./Form";
import { initializeGTM } from "../ReactGA4";
function About({about}) {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);
  useEffect(() => {
    initializeGTM();
  }, []);
  const toggleForm = () => {
    setShowForm((prevState) => !prevState);
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
  const aboutdata = about?.about ? JSON.parse(about.about) : [] ;
  console.log("aboutdata",aboutdata)
  return (
    <div className="py-10">
      <div className="text-center ">
        <h2 className="text-lg font-bold mb-5 border-b-2 border-green-500 inline-block text-center ">
       About
        </h2>
      </div>

      <div className="mx-auto max-w-screen-xl p-5 ">
        {aboutdata.map((section, index) => (
          <div key={index}>
            <h4 className="text-2xl font-semibold mt-6 mb-2 text-green-600">
              {section.title}
            </h4>
            <p className="text-sm md:text-lg lg:text-lg xl:text-lg text-gray-700 leading-relaxed text-justify">
              {section.description}
            </p>
           
           
          </div>
        ))}
      </div>
      <div className="text-center">
        <button
          onClick={toggleForm}
          className="mx-auto bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"
        >
          <FaRegFilePdf className="inline-block mr-2 text-xl" />
          Download Brochure
        </button>
      </div>
      {showForm && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div ref={formRef}>
            <Form onClose={toggleForm}   propertyform={about} />
          </div>
        </div>
      )}
      <hr className="my-4 border-blue-gray-50" />
    </div>
  );
}

export default About;
