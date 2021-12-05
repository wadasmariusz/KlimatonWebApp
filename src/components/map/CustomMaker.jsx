import { Marker, Popup } from "react-leaflet";

const CustomMarker = ({ position, name }) => {
  return (
    <Marker position={position}>
      <Popup>{name}</Popup>
    </Marker>
  );
};

export default CustomMarker;
