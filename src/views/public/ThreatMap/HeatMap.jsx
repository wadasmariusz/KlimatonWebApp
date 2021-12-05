import L from "leaflet";
import { useMap } from "react-leaflet";
import { useEffect } from "react";
import "leaflet.heat";
import { useQueryContext } from "../../../app/context/queries/QueryProvider";

const HeatMap = () => {
  const map = useMap();
  const { data } = useQueryContext();

  useEffect(() => {
    if (data.length === 0) return;
    L.heatLayer(data, { radius: 10 }).addTo(map);
  }, []);

  return null;
};

export default HeatMap;
