import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-white rounded-lg m-4">
            <div className="container-fluid  mx-auto p-4 md:py-4 px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8 md:w-10 md:h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="ml-3 text-base md:text-lg lg:text-xl font-semibold">Plot In Bangalore</span>
                        </a>
                </div>
                
                
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="text-base text-gray-500 dark:text-gray-400 mt-6 text-justify">
                    <p>
                        <strong>Disclaimer:</strong> The website belongs to authorized channel partner MarkAnthony. The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of the authorized marketing partner. We may share data with RERA registered brokers/companies for further processing. We may also send updates to the mobile number/email id registered with us.
                    </p>
                </div>
                
                <span className="block text-base font-semibold text-gray-500 sm:text-center dark:text-gray-400 mt-2">© {currentYear} Plot In Bangalore™. All Rights Reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;
