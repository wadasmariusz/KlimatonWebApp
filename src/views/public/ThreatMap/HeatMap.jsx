import L from "leaflet";
import { useMap } from "react-leaflet";
import { useEffect } from "react";
import "leaflet.heat";

const HeatMap = ({ addressPoints }) => {
  const map = useMap();

  useEffect(() => {
    if (addressPoints.length === 0) return;
    L.heatLayer(addressPoints, { minOpacity: 0.2, radius: 40 }).addTo(map);
  }, []);

  return null;
};

export default HeatMap;
