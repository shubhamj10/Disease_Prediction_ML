import React, { useState, useEffect } from 'react';
import Navbar from '../shared/Navbar';
import axios from 'axios';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

function Recommend() {
  const [searchQuery, setSearchQuery] = useState('');
  const [diseaseInfo, setDiseaseInfo] = useState(null);
  const [error, setError] = useState(null);
  const [mapCenter, setMapCenter] = useState({ lat: 19.0760, lng: 72.8777 }); // Default to Mumbai
  const [zoomLevel, setZoomLevel] = useState(13); // Set a default zoom level
  const [hospitals, setHospitals] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [searchedLocation, setSearchedLocation] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:8000/disease', { params: { disease: searchQuery } });
      setDiseaseInfo(response.data);
      setError(null);
    } catch (err) {
      setError("Disease not found.");
      setDiseaseInfo(null);
    }
  };

  const handleMapLoad = (map) => {
    const input = document.getElementById('map-search-box');
    const searchBox = new window.google.maps.places.SearchBox(input);
    map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(input);

    searchBox.addListener('places_changed', () => {
      const places = searchBox.getPlaces();
      if (places.length === 0) return;

      const place = places[0];
      const location = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
      setMapCenter(location);
      setSearchedLocation(location);
      setZoomLevel(13); // Keep a reasonable zoom level

      // Fetch nearby hospitals
      fetchNearbyHospitals(location.lat, location.lng);
    });
  };

  const fetchNearbyHospitals = async (lat, lng) => {
    try {
      console.log(`Fetching hospitals for location: ${lat}, ${lng}`); // Debug log
      const response = await axios.get('http://localhost:8000/nearby-hospitals', { params: { lat, lng } });
      console.log('Hospitals data:', response.data); // Debug log
      const closestHospitals = response.data.slice(0, 10); // Get top 10 closest hospitals
      setHospitals(closestHospitals);
    } catch (error) {
      console.error("Error fetching hospitals:", error);
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
            className="w-3/4 p-2 border border-gray-300 rounded-md"
          />
          <button type="submit" className="ml-2 p-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition duration-300 ease-in-out">
            Search
          </button>
        </form>
        {error && <p className="text-red-500">{error}</p>}
        {diseaseInfo && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-blue-600">How to Prevent</h3>
              <ul className="mt-2">{diseaseInfo.prevention.map((item, index) => <li key={index} className="ml-4 list-disc">{item}</li>)}</ul>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-blue-600">Popular Medicines</h3>
              <ul className="mt-2">{diseaseInfo.medicines.map((item, index) => <li key={index} className="ml-4 list-disc">{item}</li>)}</ul>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-blue-600">Home Remedies</h3>
              <ul className="mt-2">{diseaseInfo.homeRemedies.map((item, index) => <li key={index} className="ml-4 list-disc">{item}</li>)}</ul>
            </div>
          </div>
        )}
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} libraries={['places']}>
          <div className="flex mb-4">
            <input id="map-search-box" type="text" placeholder="Search location..." className="p-2 border border-gray-300 rounded-md flex-grow" />
          </div>
          <GoogleMap
            mapContainerStyle={{ height: '400px', width: '100%', marginTop: '20px' }}
            center={mapCenter}
            zoom={zoomLevel}
            onLoad={handleMapLoad}
          >
            {searchedLocation && (
              <Marker
                position={searchedLocation}
                icon={{
                  url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                }}
              />
            )}
            {hospitals.map((hospital, index) => (
              <Marker
                key={index}
                position={hospital.location}
                onClick={() => setSelectedHospital(hospital)}
              />
            ))}
            {selectedHospital && (
              <InfoWindow
                position={selectedHospital.location}
                onCloseClick={() => setSelectedHospital(null)}
              >
                <div>
                  <h3>{selectedHospital.name}</h3>
                  <p>{selectedHospital.address}</p>
                  <p>Rating: {selectedHospital.rating}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
        <div className="mt-4">
          <h3 className="text-lg font-bold text-blue-600">Top 10 Closest Hospitals</h3>
          <ul className="mt-2">
            {hospitals.map((hospital, index) => (
              <li key={index} className="ml-4 list-disc">
                {hospital.name} - {hospital.address} (Rating: {hospital.rating})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Recommend;
