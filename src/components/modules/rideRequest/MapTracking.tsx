import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngExpression } from "leaflet";

interface MapTrackingProps {
  pickup?: LatLngExpression;
  destination?: LatLngExpression;
}


const MapTracking = ({ pickup, destination }: MapTrackingProps) => {
  return (
    <MapContainer
      center={pickup || [23.8103, 90.4125]} // Default center (Dhaka)
      zoom={12}
      className="w-full h-screen mt-[79px]"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {pickup && (
        <Marker position={pickup}>
          <Popup>🚖 Pickup</Popup>
        </Marker>
      )}
      {destination && (
        <Marker position={destination}>
          <Popup>🎯 Destination</Popup>
        </Marker>
      )}
      {pickup && destination && (
        <Polyline positions={[pickup, destination]} color="red" />
      )}
    </MapContainer>
  );
};

export default MapTracking;
