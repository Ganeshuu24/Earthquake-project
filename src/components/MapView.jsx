import React, { useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet';

const getColor = (mag) => {
  if (mag >= 7) return "red";
  if (mag >= 5) return "orange";
  if (mag >= 3) return "gold";
  return "green";
};

function FlyTo({ selectedEq }) {
  const map = useMap();
  useEffect(() => {
    if (selectedEq) {
      const [lng, lat] = selectedEq.geometry.coordinates;
      map.flyTo([lat, lng], 5);
    }
  }, [selectedEq]);
  return null;
}

export default function MapView({ earthquakes, selectedEq, onSelect }) {
  return (
    <MapContainer center={[20,0]} zoom={2} style={{ height: "100%", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {earthquakes.map((eq) => {
        const [lng, lat, depth] = eq.geometry.coordinates;
        const mag = eq.properties.mag;
        return (
          <CircleMarker
            key={eq.id}
            center={[lat, lng]}
            radius={mag * 2}
            pathOptions={{ color: getColor(mag), weight: selectedEq?.id === eq.id ? 3 : 1 }}
            eventHandlers={{ click: () => onSelect(eq) }}
          >
            <Popup>
              <div>
                <strong>{eq.properties.place}</strong><br/>
                Mag: {mag} | Depth: {depth} km<br/>
                {new Date(eq.properties.time).toLocaleString()}
              </div>
            </Popup>
          </CircleMarker>
        );
      })}
      <FlyTo selectedEq={selectedEq} />
    </MapContainer>
  );
}