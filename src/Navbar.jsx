import React, { useState } from 'react';

function Navbar() {


    return (
        <div>
            <header className="relative text-gray-600 body-font bg-white shadow-md z-10">
                <div className="container-fluid mx-auto flex flex-wrap p-4 md:p-6 items-center justify-end">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <a href="#" className="flex title-font font-medium items-center text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8 md:w-10 md:h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="ml-3 text-base md:text-lg lg:text-xl font-semibold">Plot In Bangalore</span>
                        </a>

                    </div>
                    <span className='md:mr-auto'></span>
                    <button className="hidden md:flex w-full md:w-auto bg-green-500 text-white border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded mt-4 md:mt-0  items-center justify-center">
                        Request Call Back
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
