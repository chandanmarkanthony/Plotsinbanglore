import React, { useState, useRef, useEffect } from 'react';
import { IoClose } from "react-icons/io5";
import axios from 'axios';
import Swal from 'sweetalert2';
import { bannerData, formField } from "./DataJson"
import TagManager from 'react-gtm-module';
import { useLocation } from 'react-router-dom';
function Form({propertyform}) {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(true);
  const formRef = useRef(null);
  console.log("propertyform",propertyform)
  const [utmData, setUtmData] = useState({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_device: '',
    user_city: '',
    user_country: '',
    browser: '',
    os: '',
    latitude: '',
    longitude: '',
    email: "",
    phone: "",
    name: "",
    project: propertyform?.project_Name || "",
    allMails: JSON.parse(propertyform?.allMails) || []
  });

  const [userLocation, setUserLocation] = useState({
    latitude: '',
    longitude: '',
  });
  useEffect(() => {
    function handleClickOutside(event) {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        const config = {
          headers: {
            Authorization: `Bearer b6690d547936a3`
          }
        };
        const response = await axios.get('https://ipinfo.io/json', config);
        console.log("ip info", response);
        const { ip } = response.data;
        setUtmData(prevState => ({
          ...prevState,
          ip_address: ip,
          user_city: response.data.city,
          user_country: response.data.country,

          // longitudee:response.data.,
        }));
      } catch (error) {
        console.error('Error getting IP address:', error);
      }
    }

    fetchData();
  }, []);


  useEffect(() => {
    function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, '\\$&');
      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    const utmSource = getParameterByName('utm_source');
    const utmMedium = getParameterByName('utm_medium');
    const utmCampaign = getParameterByName('utm_campaign');
    const utmTerm = getParameterByName('utm_term');
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const browser = detectBrowser();
    const os = navigator.platform;

    setUtmData(prevState => ({
      ...prevState,
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
      utm_term: utmTerm,
      utm_device: isMobile ? 'Mobile' : 'Desktop',
      browser: browser,
      os: os
    }));

    if (navigator.permissions) {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then((permissionStatus) => {
          if (permissionStatus.state === 'granted') {
            getCurrentPosition();
          } else if (permissionStatus.state === 'prompt') {
            // Ask for permission
            navigator.geolocation.getCurrentPosition(
              (position) => {
                setUserLocation({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                });
              },
              (error) => {
                console.error('Error getting geolocation:', error);
              }
            );
          }
        })
        .catch((error) => {
          console.error('Error querying geolocation permission:', error);
        });
    } else {
      console.error('Geolocation permissions API is not supported by this browser.');
    }
  }, []);
  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.error('Error getting geolocation:', error);
      }
    );
  };


  const handleClose = () => {
    setIsOpen(false);
  };
  console.log(utmData);
  const [Name, setName] = useState("")
  const [Phone, setphone] = useState("")
  const [Email, setemail] = useState("")
  const handleSubmit = async () => {
    try {
      // Set name, email, phone in utmData
      setUtmData(prevState => ({
        ...prevState,
        name: Name,
        email: Email,
        phone: Phone,
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
      }));

      console.log("utmData", utmData);

      const response = await axios.post('https://leadapi.homebble.in/formdataRoute/getFormdata', utmData);


      if (response.status === 200) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: formField?.gtmProjectName,
        });





        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: response.data.message || 'Data sent successfully',
          showConfirmButton: true,
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
          onClose: () => {
            setIsOpen(false);
          },
        });


        const newUrl = `${window.location.pathname}?Formsuccess=true`;
        window.history.pushState({}, '', newUrl);
        window.location.href = newUrl;
        TagManager.dataLayer({
          dataLayer: {
            event: 'VirtualPageView',
            send_to: 'AW-784160287',
            pagePath: newUrl,
            pageTitle: 'successs'
          },
        });

      }
    } catch (error) {
      console.error('Error occurred:', error);

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response ? (error.response.data.message || error.response.data.error || 'An error occurred while processing your request') : 'An error occurred while processing your request',
        timer: 2000,
        timerProgressBar: true,
      });
      const newUrl = `${window.location.pathname}?FormSucess=true`;
      window.history.replaceState({}, '', newUrl);
    }
  };


  const detectBrowser = () => {
    const userAgent = navigator.userAgent;
    let browser = 'Unknown';

    if (userAgent.indexOf("Firefox") > -1) {
      browser = "Mozilla Firefox";
    } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
      browser = "Opera";
    } else if (userAgent.indexOf("Trident") > -1) {
      browser = "Microsoft Internet Explorer";
    } else if (userAgent.indexOf("Edge") > -1) {
      browser = "Microsoft Edge";
    } else if (userAgent.indexOf("Chrome") > -1) {
      browser = "Google Chrome or Chromium";
    } else if (userAgent.indexOf("Safari") > -1) {
      browser = "Apple Safari";
    }

    return browser;
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUtmData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div ref={formRef} className="flex justify-center self-center bg-green-400 ">
            <div className="p-12 bg-white rounded-2xl w-100 shadow-md relative  border-green-400 border-2">
              <IoClose className="absolute top-0 right-0 m-4 cursor-pointer text-gray-700" onClick={handleClose} />
              <div className="mb-4">
                <h3 className="font-semibold text-2xl text-gray-800 text-center">Enquiry Now</h3>
              </div>
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 tracking-wide" htmlFor="name">Name</label>
                  <input id="name" name="name" className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="text" placeholder="Enter Your Name" value={utmData.name} onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide" htmlFor="phone">Number</label>
                  <input id="phone" name="phone" className="w-full content-center text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="number"
                    inputMode="numeric" placeholder="Enter your Number" value={utmData.phone} onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 tracking-wide" htmlFor="email">Email</label>
                  <input id="email" name="email" className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="email" placeholder="Enter Your Email" value={utmData.email} onChange={handleInputChange} />
                </div>
                <div>
                  <button type="submit" className="w-full flex justify-center bg-green-400 hover:bg-green-500 text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500" onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Form;
