import React, { useEffect } from 'react';
import { highlightsData } from './DataJson'
import debounce from 'lodash/debounce';
function ProjectHighlights() {
  useEffect(() => {
    const handleScroll = debounce(() => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'scrollEvent',
        scrollDepth: window.scrollY,
      });
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <div className="text-center py-10">
      <h2 className="text-xl font-bold mb-5 border-b-2 border-green-500 inline-block">Project Highlights</h2>
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 p-5 sm:grid-cols-2 lg:grid-cols-3">
  {highlightsData.map((highlight, index) => (
    <div
      className="w-full h-auto rounded-lg shadow-lg bg-white transition-transform duration-200 hover:scale-105 border border-gray-200"
      key={index}
    >
      <div className="p-6">
        <ul className="space-y-3">
          {highlight.map((item, idx) => (
            <li className="flex items-start" key={idx}>
              <span className="text-green-500 mr-2">&#10003;</span>
              <span className='text-sm md:text-lg lg:text-lg xl:text-lg text-start'>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}

export default ProjectHighlights;
