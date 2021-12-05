import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import icon from "../../assets/img/map/szkoła.png";

const markerIcon = L.icon({
  iconUrl: icon,
  iconRetinaUrl: icon,
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [80, 80],
});

const CustomSchoolMarker = ({ position, name }) => {
  return (
    <Marker position={position} icon={markerIcon}>
      <Popup>{name}</Popup>
    </Marker>
  );
};

export default CustomSchoolMarker;
