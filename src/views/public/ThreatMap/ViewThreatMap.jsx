import { MapContainer, TileLayer, LayersControl } from "react-leaflet";
import Sidebar from "./Sidebar";
import { useGetInstitutions } from "../../../app/CRUD/institutions/getInsitutions";
import { QueryProvider } from "../../../app/context/queries/QueryProvider";
import { QueryIsSuccess } from "../../../app/context/queries/QueryIsSuccess";
import { QueryHasResults } from "../../../app/context/queries/QueryHasResults";
import InsititutionList from "./InsititutionList";
import AddReport from "./AddReport";
import Helmet from "react-helmet";

const ViewThreatMap = () => {
  const institutionsData = useGetInstitutions();

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
        <LayersControl position="topleft">
          <Sidebar />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <QueryProvider {...institutionsData}>
            <QueryIsSuccess>
              <InsititutionList />
            </QueryIsSuccess>
          </QueryProvider>
        </LayersControl>
        {/* <AddReport /> */}
      </MapContainer>
    </>
  );
};

export default ViewThreatMap;
