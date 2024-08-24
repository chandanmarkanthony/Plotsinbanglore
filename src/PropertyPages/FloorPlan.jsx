import React, { useState, useRef, useEffect } from 'react';
import { floorPlans } from './DataJson';
import Form from './Form';

function FloorPlan({floorPlans}) {
    const [showForm, setShowForm] = useState(false);
    const [blurImages, setBlurImages] = useState(false);
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

    useEffect(() => {
        const timer = setTimeout(() => {
            setBlurImages(true);
        }, 15000);

        return () => clearTimeout(timer);
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
const floorPlansdata= floorPlans?.floorPlans ? JSON.parse(floorPlans.floorPlans) : []
    return (
        <div>
            <section className="py-20" id='price'>
                <h2 className="text-center text-xl font-bold mb-5">
                    <span className="border-b-2 border-green-500">Floor Plan</span>
                </h2>
                <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-5 ">
                    {floorPlansdata.map((plan, index) => (
                        <article key={index} className="flex flex-col justify-between h-auto bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-200  hover:translate-y-2 border-2 border-grey-700">
                            <div className='m-2 rounded-t-lg border-2 border-grey-700'>
                                <img 
                                    className={`h-48 w-full object-cover shadow-md rounded-t-lg border ${blurImages ? 'blur-sm' : ''}`} 
                                    alt="featured image" 
                                    onClick={toggleForm}
                                    src={plan.image} 
                                />
                            </div>
                            <div className="p-2 ">
                                <div className='rounded-b-lg border-2 border-grey-700'>
                                    <div className='flex justify-end mt-[-70px]'>
                                        <p className="mb-3 text-md font-medium text-white flex justify-end bg-green-600 rounded-lg p-2 z-10 mx-2"   onClick={toggleForm}>{plan.type}</p>
                                    </div>
                                    <div className='mt-[30px]'>
                                        <p className="mb-3 text-md font-medium text-gray-800 flex justify-center border-2 border-grey-700 rounded-lg mx-6">Area: {plan.area} Sq.ft</p>
                                        <p className="mb-4 text-xl font-medium text-gray-800 flex justify-center">{plan.starting_Price}</p>
                                    </div>
                                </div>
                                <div className="m-4">
                                    <button 
                                        onClick={toggleForm}
                                        className="text-white font-bold py-3 px-6 rounded effetGradient mx-auto block">Enquiry Now</button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
            {showForm && <div ref={formRef}><Form onClose={toggleForm} /></div>}
        </div>
    );
}

export default FloorPlan;
