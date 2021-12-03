import { MapContainer, TileLayer } from "react-leaflet";

const ViewThreatMap = () => {
  return (
    <MapContainer
      center={[50.04132, 21.99901]}
      zoom={14}
      scrollWheelZoom={true}
      style={{ height: "100vh", backgroundColor: "#333" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default ViewThreatMap;
