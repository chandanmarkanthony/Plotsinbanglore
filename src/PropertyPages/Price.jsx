import React, { useState, useRef, useEffect } from 'react';
import Form from './Form'; // Ensure you have the Form component

const PricingTable = ({ floorPlans }) => {
    const [showForm, setShowForm] = useState(false);
    const [blurImages, setBlurImages] = useState(false);
    const formRef = useRef(null);

    // Handle scroll event for dataLayer
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

    // Set blur on images after 15 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setBlurImages(true);
        }, 15000);

        return () => clearTimeout(timer);
    }, []);

    // Toggle form visibility
    const toggleForm = () => {
        setShowForm(prevState => !prevState);
    };

    // Close form when clicking outside of it
    const handleClickOutside = (event) => {
        if (formRef.current && !formRef.current.contains(event.target)) {
            setShowForm(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Parse floorPlans data
    const floorPlansData = floorPlans?.floorPlans ? JSON.parse(floorPlans.floorPlans) : [];

    return (
        <div className="max-w-screen-xl mx-auto px-6">
            <h2 className="text-center text-xl font-bold mb-5">
                <span className="border-b-2 border-green-500">Master Plan</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-8">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <table className="min-w-full md:table">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-2 text-left">Type</th>
                                    <th className="px-4 py-2 text-left">SBA</th>
                                    <th className="px-4 py-2 text-left">Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {floorPlansData.map((plan, index) => (
                                    <tr key={index}>
                                        <td className="border-t px-4 py-2">{plan.type}</td>
                                        <td className="border-t px-4 py-2">{plan.area}</td>
                                        <td className="border-t px-4 py-2">{plan.starting_Price}</td>
                                        <td className="border-t">
                                            <button
                                                className="ml-4 bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                                                onClick={toggleForm}
                                            >
                                                Get Pricing
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="relative md:col-span-4">
                    {floorPlansData.length > 0 && (
                        <img
                            src={floorPlansData[0].image}
                            alt="Costing Details"
                            className={`w-full h-48 object-cover rounded-lg shadow-md ${blurImages ? 'blur-sm' : ''}`}
                        />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-gray-800">
                            Master Plan
                        </button>
                    </div>
                </div>
            </div>

            {showForm && (
                <div ref={formRef}>
                    <Form onClose={toggleForm} propertyform={floorPlans} />
                </div>
            )}
        </div>
    );
};

export default PricingTable;
