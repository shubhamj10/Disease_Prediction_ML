import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import axios from 'axios';

function Recommend() {
  const [searchQuery, setSearchQuery] = useState('');
  const [diseaseInfo, setDiseaseInfo] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);

    try {
      const response = await axios.get('http://localhost:8000/disease', {
        params: { disease: searchQuery },
      });
      setDiseaseInfo(response.data);
      setError(null);
    } catch (err) {
      setError("Disease not found.");
      setDiseaseInfo(null);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow p-4 bg-gray-100 rounded-lg shadow-inner">
        <form onSubmit={handleSearch} className="mb-4 flex items-center mx-auto max-w-7xl">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for a disease..."
            className="w-3/4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">
            Search
          </button>
        </form>
        {error && <p className="text-red-500">{error}</p>}
        {diseaseInfo && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card for Prevention */}
            <div className="p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-lg font-bold text-blue-600">How to Prevent</h3>
              <ul className="mt-2">
                {diseaseInfo.prevention.map((item, index) => (
                  <li key={index} className="ml-4 list-disc">{item}</li>
                ))}
              </ul>
            </div>
            {/* Card for Medicines */}
            <div className="p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-lg font-bold text-blue-600">Popular Medicines</h3>
              <ul className="mt-2">
                {diseaseInfo.medicines.map((item, index) => (
                  <li key={index} className="ml-4 list-disc">{item}</li>
                ))}
              </ul>
            </div>
            {/* Card for Home Remedies */}
            <div className="p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-lg font-bold text-blue-600">Home Remedies</h3>
              <ul className="mt-2">
                {diseaseInfo.homeRemedies.map((item, index) => (
                  <li key={index} className="ml-4 list-disc">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Recommend;
