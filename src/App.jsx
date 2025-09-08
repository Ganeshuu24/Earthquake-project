import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MapView from './components/MapView';
import EarthquakeList from './components/EarthquakeList';

export default function App() {
  const [earthquakes, setEarthquakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEq, setSelectedEq] = useState(null);
  const [minMag, setMinMag] = useState(0);
  const [sortBy, setSortBy] = useState("time");

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson");
      setEarthquakes(res.data.features);
      setError(null);
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen">
      <div className="w-1/3 bg-white shadow-lg overflow-y-auto hidden md:block">
        <EarthquakeList
          earthquakes={earthquakes}
          selectedEq={selectedEq}
          onSelect={setSelectedEq}
          minMag={minMag}
          setMinMag={setMinMag}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>
      <div className="flex-1">
        <MapView earthquakes={earthquakes} selectedEq={selectedEq} onSelect={setSelectedEq} />
      </div>
    </div>
  );
}