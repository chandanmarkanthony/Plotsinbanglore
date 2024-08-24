import React, { useEffect } from 'react';

function Gallery({ gallery }) {
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

    const galleryData = gallery?.galleryData ? JSON.parse(gallery.galleryData) : [];

    return (
        <div className="text-center py-10" id='gallery'>
            <h2 className="text-xl font-bold mb-5 border-b-2 border-green-500 inline-block">Gallery</h2>
            <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-5">
                {galleryData.length > 0 ? (
                    galleryData.map((image, index) => (
                        <div key={index} className="relative">
                            <img
                                className="object-cover object-center w-full h-56 max-w-full rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                                src={image}
                                alt={`Gallery image ${index + 1}`}
                            />
                        </div>
                    ))
                ) : (
                    <p>No images available.</p>
                )}
            </div>
        </div>
    );
}

export default Gallery;
