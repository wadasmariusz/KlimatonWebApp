import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import icon from "../../assets/img/map/zasmiecenie.png";

const markerIcon = L.icon({
  iconUrl: icon,
  iconRetinaUrl: icon,
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [80, 80],
});

const CustomGarbageMarker = ({ position, name }) => {
  return (
    <Marker icon={markerIcon} position={position}>
      {name && <Popup>{name}</Popup>}
    </Marker>
  );
};

export default CustomGarbageMarker;
