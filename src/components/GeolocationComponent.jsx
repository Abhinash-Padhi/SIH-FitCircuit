import React, { useState, useEffect } from 'react';
import './GeolocationComponent.css'

const GeolocationComponent = ({ onLocationFetched }) => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    city: null,
    state: null,
    country: null,
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if Geolocation is available
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ ...location, latitude, longitude });
          fetchLocationDetails(latitude, longitude);
          onLocationFetched(latitude, longitude); // Pass the location to parent
        },
        (err) => {
          setError("Error fetching location: " + err.message);
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  }, []);

  const fetchLocationDetails = async (latitude, longitude) => {
    const apiKey = import.meta.env.VITE_OPENCAGE_API_KEY; // Replace with your OpenCage API key
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        const { city, state, country } = data.results[0].components;
        setLocation((prev) => ({
          ...prev,
          city: city || '',
          state: state || '',
          country: country || '',
        }));
      }
    } catch (error) {
      setError("Error fetching location details: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="geolocation-container">
      {loading && <p className="loading-message">Fetching your location...</p>}
      {error && <p className="error-message">Error: {error}</p>}
      {location.latitude && location.longitude && (
        <div>
          <h2>Your Location:</h2>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <p>City: {location.city || 'Not available'}</p>
          <p>State: {location.state || 'Not available'}</p>
          <p>Country: {location.country || 'Not available'}</p>
        </div>
      )}
    </div>
  );
  
};

export default GeolocationComponent;
