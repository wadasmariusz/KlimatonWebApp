import CustomMarker from "../../../components/map/CustomMarker";
import { useQueryContext } from "../../../app/context/queries/QueryProvider";
import { LayersControl, LayerGroup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";

const InsititutionList = () => {
  const { data } = useQueryContext();

  return (
    <LayersControl.BaseLayer checked name="Instytucje">
      <LayerGroup>
        <MarkerClusterGroup>
          {data.map(({ location, name, id }) => (
            <CustomMarker
              key={id}
              position={[location?.latitude, location?.longitude]}
              name={name}
            />
          ))}
        </MarkerClusterGroup>
      </LayerGroup>
    </LayersControl.BaseLayer>
  );
};

export default InsititutionList;
