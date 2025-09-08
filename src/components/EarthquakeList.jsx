import React, { useMemo } from 'react';

export default function EarthquakeList({ earthquakes, selectedEq, onSelect, minMag, setMinMag, sortBy, setSortBy }) {
  const filtered = useMemo(() => {
    let eqs = earthquakes.filter(eq => eq.properties.mag >= minMag);
    if (sortBy === "time") eqs.sort((a,b) => b.properties.time - a.properties.time);
    if (sortBy === "magnitude") eqs.sort((a,b) => b.properties.mag - a.properties.mag);
    if (sortBy === "depth") eqs.sort((a,b) => b.geometry.coordinates[2] - a.geometry.coordinates[2]);
    return eqs;
  }, [earthquakes, minMag, sortBy]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Earthquakes ({filtered.length})</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium">Min Magnitude: {minMag}</label>
        <input type="range" min="0" max="8" step="0.1" value={minMag} onChange={e => setMinMag(Number(e.target.value))} className="w-full"/>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Sort By</label>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="border p-1 w-full">
          <option value="time">Time</option>
          <option value="magnitude">Magnitude</option>
          <option value="depth">Depth</option>
        </select>
      </div>

      <ul className="space-y-2">
        {filtered.map(eq => (
          <li key={eq.id}
              onClick={() => onSelect(eq)}
              className={`p-2 border rounded cursor-pointer ${selectedEq?.id === eq.id ? "bg-blue-100" : "bg-white"}`}>
            <div className="font-medium">{eq.properties.place}</div>
            <div className="text-sm">Mag {eq.properties.mag} | Depth {eq.geometry.coordinates[2]} km</div>
            <div className="text-xs text-gray-500">{new Date(eq.properties.time).toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}