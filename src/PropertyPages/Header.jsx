import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { headerData } from './DataJson';
import { Link } from 'react-router-dom';
import Form from './Form';

const Header = () => {
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
            <header className="text-slate-700 relative mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center shadow-md">
                <Link to={headerData.pageUrl} className="flex items-center ml-4 whitespace-nowrap text-2xl font-black">
                    <span className="w-[88%]">
                        <img src={headerData.propertylogo} alt={headerData.logoalt} className='h-[50px]' />
                    </span>
                </Link>
                <input type="checkbox" className="peer hidden" id="navbar-open" />
                <label className="absolute top-5 right-5 cursor-pointer lg:hidden" htmlFor="navbar-open">
                    <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </label>
                <nav aria-label="Header Navigation" className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row">
                    <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-end lg:space-y-0">
                        <li className="lg:mr-12"><a className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href={headerData.pageUrl}>Home</a></li>
                        <li className="lg:mr-12"><a className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#overview">Overview</a></li>
                        <li className="lg:mr-12"><a className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#price">Price</a></li>
                        <li className="lg:mr-12"><a className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#amenities">Amenities</a></li>
                        <li className="lg:mr-12"><a className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#gallery">Gallery</a></li>
                        <li className="lg:mr-12"><a className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#location">Location</a></li>
                    </ul>
                    <hr className="mt-4 w-full lg:hidden" />
                    <div className="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
                        <button 
                         onClick={toggleForm}
                         className="inline-flex items-center bg-gray-100 border-0 py-2 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                            Brochure <AiOutlineDownload className="ml-1 animate-slide-in-down" size={24} />
                        </button>
                    </div>
                </nav>
            </header>
            {showForm && <div ref={formRef}><Form onClose={toggleForm} /></div>}
        </div>
    );
}

export default Header;
