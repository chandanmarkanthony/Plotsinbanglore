import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { footerData } from "./DataJson";
import { bannerData } from "./DataJson";
import Form from "./Form";
import Qr from "../Assets/Images/bangalore_agent_rera_qr_code.png";
function Footer({property}) {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "scrollEvent",
        scrollDepth: window.scrollY,
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
    <div>
      <div className="text-center p-4 ">
        <div className="mx-auto max-w-screen-xl  flex flex-col items-center">
          <h4 className="text-sm md:text-lg font-semibold mb-6">
            {property?.project_Rera}
          </h4>
          <h4 className="text-sm md:text-lg font-semibold mb-6">{property.agent_Rera}</h4>
          <img src={Qr} alt="Scan" className="mb-4 h-20 w-20" />

          <p
            style={{ fontSize: "11px" }}
            className="text-black leading-relaxed text-justify"
          >
            <strong>Disclaimer: </strong>
            {footerData.disclaimer}  <Link to="https://luxuryandme.in/privacy-policy.html"   target="_blank"  className="text-green-600 hover:underline text-md font-bold">Privacy Policy</Link>
          </p>
        </div>
      </div>

      <br/>
      <br/>
      <br/>
      {showForm && (
        <div ref={formRef}>
          <Form onClose={toggleForm} />
        </div>
      )}
      <div className="lg:hidden bg-green-600 p-1  fixed bottom-0 w-full">
        <nav className="flex justify-between items-center justify-items-center">
          <div
            onClick={toggleForm}
            className="text-gray-100 hover:text-gray-300 transition duration-300 px-2 py-2 rounded-md"
          >
            Email
          </div>
          |
          <Link
            to={bannerData.whatsappLink}
            className="text-gray-100 hover:text-gray-300 transition duration-300 px-2 py-2 rounded-md"
          >
            WhatsApp
          </Link>
          |
          <Link
            to={bannerData.phoneLink}
            className="text-gray-100 hover:text-gray-300 transition duration-300 px-2 py-2 rounded-md"
          >
            Call Us
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Footer;