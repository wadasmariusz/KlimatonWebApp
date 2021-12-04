import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import scool from "../../assets/img/map/zespol.png";

const schoolIcon = L.icon({
  iconUrl: scool,
  iconRetinaUrl: scool,
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [40, 57],
});

const CustomMarker = ({ position, name }) => {
  return (
    <Marker position={position} icon={schoolIcon}>
      <Popup>{name}</Popup>
    </Marker>
  );
};

export default CustomMarker;
