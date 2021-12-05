import { useMap } from "react-leaflet";
import SearchForm from "./SearchForm";
import ThreatList from "./ThreatList";
import { IoClose } from "react-icons/all";

const Sidebar = ({ threatData }) => {
  const map = useMap();

  const disableControls = () => {
    map.dragging.disable();
    map.touchZoom.disable();
    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();
    map.boxZoom.disable();
    map.keyboard.disable();
  };

  const enableControls = () => {
    map.dragging.enable();
    map.touchZoom.enable();
    map.doubleClickZoom.enable();
    map.scrollWheelZoom.enable();
    map.boxZoom.enable();
    map.keyboard.enable();
  };

  return (
    <div
      style={{ zIndex: "99999" }}
      className="bg-gray-100 dark:bg-gray-900 rounded p-6 pb-0 max-w-md absolute right-8 top-8 bottom-8 overflow-hidden flex flex-col"
      onMouseEnter={disableControls}
      onMouseLeave={enableControls}
    >
      <div className="flex w-full jutify-end">
        <button className="appearance-none p-2 ml-auto">
          <IoClose color="currentColor" size={24} />
        </button>
      </div>
      <h2 className="text-black dark:text-gray-400 text-base mb-1">
        Wprowadź adres
      </h2>
      <SearchForm />
      <ThreatList data={threatData} />
    </div>
  );
};

export default Sidebar;
