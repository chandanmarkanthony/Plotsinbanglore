import React, { useState, useRef, useEffect } from "react";
import { aboutData } from "./DataJson";
import { FaRegFilePdf } from "react-icons/fa";
import Form from "./Form";
import { initializeGTM } from "../ReactGA4";
function About() {
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

  return (
    <div className="py-10">
      <div className="text-center ">
        <h2 className="text-lg font-bold mb-5 border-b-2 border-green-500 inline-block text-center ">
          {aboutData.title}
        </h2>
      </div>

      <div className="mx-auto max-w-screen-xl p-5 ">
        {aboutData.content.map((section, index) => (
          <div key={index}>
            <h4 className="text-2xl font-semibold mt-6 text-green-600">
              {section.heading}
            </h4>
            <p className="text-sm md:text-lg lg:text-lg xl:text-lg text-gray-700 leading-relaxed text-justify">
              {section.paragraph}
            </p>
            <p className="text-sm md:text-lg lg:text-lg xl:text-lg text-gray-700 leading-relaxed text-justify">
              {section.paragraph1}
            </p>
            <p className="text-sm md:text-lg lg:text-lg xl:text-lg text-gray-700 leading-relaxed text-justify">
              {section.paragraph2}
            </p>
            <p className="text-sm md:text-lg lg:text-lg xl:text-lg text-gray-700 leading-relaxed text-justify">
              {section.paragraph3}
            </p>
            <p className="text-sm md:text-lg lg:text-lg xl:text-lg text-gray-700 leading-relaxed text-justify">
              {section.paragraph4}
            </p>
            <p className="text-sm md:text-lg lg:text-lg xl:text-lg text-gray-700 leading-relaxed text-justify">
              {section.paragraph5}
            </p>
            {section.subpoints && (
              <ul className="text-sm md:text-lg lg:text-lg xl:text-lg text-gray-700 leading-relaxed text-justify">
                {section.subpoints.map((subpoint, subIndex) => (
                  <li key={subIndex} className="mt-3">
                    <strong>{subpoint.split(":")[0]}</strong>:{" "}
                    {subpoint.split(":")[1]}
                  </li>
                ))}
              </ul>
            )}
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
            <Form onClose={toggleForm} />
          </div>
        </div>
      )}
      <hr className="my-4 border-blue-gray-50" />
    </div>
  );
}

export default About;
