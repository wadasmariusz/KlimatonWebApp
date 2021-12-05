import CustomSensorMarker from "../../../components/map/CustomSensorMarker";
import { useQueryContext } from "../../../app/context/queries/QueryProvider";
import { LayersControl, LayerGroup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";

const SensorsList = () => {
  const { data } = useQueryContext();

  return (
    <LayersControl.Overlay name="Sensory">
      <LayerGroup>
        <MarkerClusterGroup>
          {data.map(({ location, name, id }) => (
            <CustomSensorMarker key={id} position={location} name={name} />
          ))}
        </MarkerClusterGroup>
      </LayerGroup>
    </LayersControl.Overlay>
  );
};

export default SensorsList;
