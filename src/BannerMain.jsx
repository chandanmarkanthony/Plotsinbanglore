import React, { useEffect, useState } from 'react';
import banner1 from './Assets/Images/Godrej-24-main-banner.webp';
import banner2 from './Assets/Images/Godrej-Ananda-main-banner.webp';
import banner3 from './Assets/Images/Godrej-Celeste-Banner.webp';
import banner4 from './Assets/Images/Godrej-main-banner.webp';

function BannerMain() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const images = [banner1, banner2, banner3, banner4];
  const titles = ["SHRIRAM PROPERTIES", "EXCLUSIVE HOMES", "LUXURY LIVING", "EXCLUSIVE HOMES"];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true);
    }, 1000);
  };

  return (
    <div className="relative w-full h-96 md:h-[35rem] lg:h-[45rem] overflow-hidden md:-mt-16">
      <div
        className="absolute w-full h-96 md:h-full flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center md:justify-start items-center p-6 md:p-14">
              <div
                className={`text-center transition-opacity duration-1000 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}
              >
                <h1 className="text-3xl md:text-6xl font-bold text-white">
                  {titles[currentIndex]}
                </h1>
                <button className="mt-4 px-6 py-2 md:py-3 bg-transparent border-green-500 border-2 hover:bg-green-500 text-white font-semibold rounded-lg md:rounded-full">
                  ENQUIRY NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${currentIndex === index ? 'bg-green-500' : 'bg-white'}`}
            onClick={() => handleDotClick(index)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
    </div>
  );
}

export default BannerMain;
