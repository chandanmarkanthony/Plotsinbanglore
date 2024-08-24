import React from 'react';

const splitIntoChunks = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const HighlightsComponent = ({ highlights }) => {
  const highlightsArray = highlights?.highlights ? JSON.parse(highlights.highlights) : [];
  const chunks = splitIntoChunks(highlightsArray, 6);

  return (
    <div className="text-center py-10">
      <h2 className="text-xl font-bold mb-5 border-b-2 border-green-500 inline-block">Project Highlights</h2>
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 p-5 sm:grid-cols-2 lg:grid-cols-3">
        {chunks.map((chunk, chunkIndex) => (
          <div
            className="w-full h-auto rounded-lg shadow-lg bg-white transition-transform duration-200 hover:scale-105 border border-gray-200"
            key={chunkIndex}
          >
            <div className="p-6">
              <ul className="space-y-3">
                {chunk.map((item, itemIndex) => (
                  <li className="flex items-start" key={itemIndex}>
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
};

export default HighlightsComponent;
