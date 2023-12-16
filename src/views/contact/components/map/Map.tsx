import React from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import L, { Icon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";
import { Paper } from "@mui/material";

// Définition du type pour les marqueurs
type MarkerData = {
  geocode: [number, number];
  popUp: string;
};

const Map: React.FC = () => {
  // Markers
  const markers: MarkerData[] = [
    {
      geocode: [45.483168, 4.532536],
      popUp: "Hello, I am pop up 1",
    },
  ];

  const customIcon = new Icon({
    iconUrl: require("../../../../assets/icons/marker-icon.png"),
    iconSize: [38, 38],
  });

  const createCustomClusterIcon = (cluster: any): L.DivIcon => {
    return L.divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true),
    });
  };

  return (
    <Paper
      elevation={3}
      sx={{ width: "100%", height: "250px", overflow: "hidden", mt: 2 }}
    >
      <MapContainer
        center={[45.483168, 4.532536]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createCustomClusterIcon}
        >
          {markers.map((marker, index) => (
            <Marker key={index} position={marker.geocode} icon={customIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </Paper>
  );
};

export default Map;
