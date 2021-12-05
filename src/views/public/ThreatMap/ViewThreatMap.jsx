import {
  MapContainer,
  TileLayer,
  LayersControl,
  LayerGroup,
} from "react-leaflet";
import Sidebar from "./Sidebar";
import { useGetInstitutions } from "../../../app/CRUD/institutions/getInsitutions";
import { useGetSensors } from "../../../app/CRUD/sensors/getSensors";
import { QueryProvider } from "../../../app/context/queries/QueryProvider";
import { QueryIsSuccess } from "../../../app/context/queries/QueryIsSuccess";
import { QueryHasResults } from "../../../app/context/queries/QueryHasResults";
import InsititutionList from "./InsititutionList";
import SensorsList from "./SensorsList";
import AddReport from "./AddReport";
import Helmet from "react-helmet";
import HeatMap from "./HeatMap";
import GetCustomThreatMarker from "../../../components/map/GetCustomThreatPin";

const threatData = [
  {
    id: 1,
    threatName: "Zaśmiecony teren",
    type: 12,
    description: "Sterta śmieci przy ulicy Błogosławionej Karoliny.",
    commentCount: 15,
    upvoteCount: 84,
    location: {
      lat: 50.0438914404607,
      lng: 21.95481808355473,
    },
  },
  {
    id: 2,
    threatName: "Podtopienie",
    type: 4,
    description:
      "Teren podatny na podtopienie na ulicy Grabskiego niedaleko Wisłoka.",
    commentCount: 8,
    upvoteCount: 109,
    location: {
      lat: 50.012876173841605,
      lng: 21.995949521332815,
    },
  },
  {
    id: 3,
    threatName: "Zaśmiecony teren",
    type: 12,
    description:
      "Odpady elektryczne wyrzucone na skrzyżowaniu Budziwojskiej i Herbowej.",
    commentCount: 4,
    upvoteCount: 81,
    location: {
      lat: 49.9664359024546,
      lng: 22.022484302352634,
    },
  },
  {
    id: 4,
    threatName: "Kopciuch",
    type: 8,
    description:
      "Regularnie unoszący się czarny, śmierdzący dym z komina jednego z mieszkańców ulicy Miłej.",
    commentCount: 0,
    upvoteCount: 3,
    location: {
      lat: 50.00146107431562,
      lng: 22.00557050327403,
    },
  },
  {
    id: 5,
    threatName: "Brzydki zapach",
    type: 14,
    description:
      "Brzydki zapach w pobliżu placu zabaw na osiedlu przy ul. Architektów 1.",
    commentCount: 6,
    upvoteCount: 59,
    location: {
      lat: 50.02075644612626,
      lng: 21.971307573684687,
    },
  },
];

const ViewThreatMap = () => {
  const institutionsData = useGetInstitutions();
  const sensorsData = useGetSensors();
  const heatPoints = institutionsData?.data?.map((item) => ({
    lat: item.location.lat,
    lng: item.location.lng,
  }));

  // console.log(heatPoints);

  return (
    <>
      <Helmet>
        <title>Mapa zagrożeń | Connected City</title>
      </Helmet>
      <MapContainer
        center={[50.04132, 21.99901]}
        zoom={14}
        scrollWheelZoom={true}
        className="bg-white dark:bg-gray-900 relative z-0"
        style={{ height: "100vh" }}
      >
        <Sidebar threatData={threatData} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayersControl position="topleft">
          <QueryProvider {...institutionsData}>
            <QueryIsSuccess>
              <InsititutionList />
            </QueryIsSuccess>
          </QueryProvider>
          <QueryProvider {...sensorsData}>
            <QueryIsSuccess>
              <SensorsList />
            </QueryIsSuccess>
          </QueryProvider>
          <LayersControl.Overlay name="Zgłoszenia">
            <LayerGroup>
              {threatData.map((threat) => (
                <GetCustomThreatMarker
                  key={threat.id}
                  position={threat.location}
                  {...threat}
                />
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

          <HeatMap addressPoints={heatPoints} />
        </LayersControl>
        <AddReport />
      </MapContainer>
    </>
  );
};

export default ViewThreatMap;
