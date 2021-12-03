import { MapContainer, TileLayer } from "react-leaflet";
import Sidebar from "./Sidebar";

const ViewThreatMap = () => {
  return (
    <MapContainer
      center={[50.04132, 21.99901]}
      zoom={14}
      scrollWheelZoom={true}
      className="bg-white dark:bg-gray-900 relative z-0"
      style={{ height: "100vh" }}
    >
      <Sidebar />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default ViewThreatMap;
