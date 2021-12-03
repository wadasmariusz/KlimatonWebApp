import { useMap } from "react-leaflet";
import SearchForm from "./SearchForm";
import ThreatList from "./ThreatList";
import { IoClose } from "react-icons/all";

const threatData = [
  {
    id: 1,
    threatId: 1,
    threatName: "Podtopienie",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu dolor nec risus convallis accumsan. Cras quis posuere tellus. Fusce dictum pharetra ligula in sollicitudin. Vestibulum suscipit pulvinar magna, vel sodales arcu congue vel. Aenean pellentesque nulla hendrerit ligula porttitor, vel vestibulum urna eleifend. Mauris tincidunt libero ante, bibendum gravida nisl suscipit ac. Donec a dapibus nisl. Quisque ut ligula vitae nisi porta pellentesque. Sed aliquam ligula ac ex scelerisque lacinia.",
  },
  {
    id: 2,
    threatId: 1,
    threatName: "Podtopienie",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu dolor nec risus convallis accumsan. Cras quis posuere tellus. Fusce dictum pharetra ligula in sollicitudin. Vestibulum suscipit pulvinar magna, vel sodales arcu congue vel. Aenean pellentesque nulla hendrerit ligula porttitor, vel vestibulum urna eleifend. Mauris tincidunt libero ante, bibendum gravida nisl suscipit ac. Donec a dapibus nisl. Quisque ut ligula vitae nisi porta pellentesque. Sed aliquam ligula ac ex scelerisque lacinia.",
  },
  {
    id: 3,
    threatId: 1,
    threatName: "Podtopienie",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu dolor nec risus convallis accumsan. Cras quis posuere tellus. Fusce dictum pharetra ligula in sollicitudin. Vestibulum suscipit pulvinar magna, vel sodales arcu congue vel. Aenean pellentesque nulla hendrerit ligula porttitor, vel vestibulum urna eleifend. Mauris tincidunt libero ante, bibendum gravida nisl suscipit ac. Donec a dapibus nisl. Quisque ut ligula vitae nisi porta pellentesque. Sed aliquam ligula ac ex scelerisque lacinia.",
  },
  {
    id: 4,
    threatId: 1,
    threatName: "Podtopienie",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu dolor nec risus convallis accumsan. Cras quis posuere tellus. Fusce dictum pharetra ligula in sollicitudin. Vestibulum suscipit pulvinar magna, vel sodales arcu congue vel. Aenean pellentesque nulla hendrerit ligula porttitor, vel vestibulum urna eleifend. Mauris tincidunt libero ante, bibendum gravida nisl suscipit ac. Donec a dapibus nisl. Quisque ut ligula vitae nisi porta pellentesque. Sed aliquam ligula ac ex scelerisque lacinia.",
  },
  {
    id: 5,
    threatId: 1,
    threatName: "Podtopienie",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu dolor nec risus convallis accumsan. Cras quis posuere tellus. Fusce dictum pharetra ligula in sollicitudin. Vestibulum suscipit pulvinar magna, vel sodales arcu congue vel. Aenean pellentesque nulla hendrerit ligula porttitor, vel vestibulum urna eleifend. Mauris tincidunt libero ante, bibendum gravida nisl suscipit ac. Donec a dapibus nisl. Quisque ut ligula vitae nisi porta pellentesque. Sed aliquam ligula ac ex scelerisque lacinia.",
  },
  {
    id: 6,
    threatId: 1,
    threatName: "Podtopienie",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu dolor nec risus convallis accumsan. Cras quis posuere tellus. Fusce dictum pharetra ligula in sollicitudin. Vestibulum suscipit pulvinar magna, vel sodales arcu congue vel. Aenean pellentesque nulla hendrerit ligula porttitor, vel vestibulum urna eleifend. Mauris tincidunt libero ante, bibendum gravida nisl suscipit ac. Donec a dapibus nisl. Quisque ut ligula vitae nisi porta pellentesque. Sed aliquam ligula ac ex scelerisque lacinia.",
  },
  {
    id: 7,
    threatId: 1,
    threatName: "Podtopienie",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu dolor nec risus convallis accumsan. Cras quis posuere tellus. Fusce dictum pharetra ligula in sollicitudin. Vestibulum suscipit pulvinar magna, vel sodales arcu congue vel. Aenean pellentesque nulla hendrerit ligula porttitor, vel vestibulum urna eleifend. Mauris tincidunt libero ante, bibendum gravida nisl suscipit ac. Donec a dapibus nisl. Quisque ut ligula vitae nisi porta pellentesque. Sed aliquam ligula ac ex scelerisque lacinia.",
  },
  {
    id: 8,
    threatId: 1,
    threatName: "Podtopienie",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu dolor nec risus convallis accumsan. Cras quis posuere tellus. Fusce dictum pharetra ligula in sollicitudin. Vestibulum suscipit pulvinar magna, vel sodales arcu congue vel. Aenean pellentesque nulla hendrerit ligula porttitor, vel vestibulum urna eleifend. Mauris tincidunt libero ante, bibendum gravida nisl suscipit ac. Donec a dapibus nisl. Quisque ut ligula vitae nisi porta pellentesque. Sed aliquam ligula ac ex scelerisque lacinia.",
  },
];

const Sidebar = () => {
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
      className="bg-gray-100 dark:bg-gray-900 rounded p-6 max-w-md absolute right-8 top-8 bottom-8 overflow-hidden"
      onMouseEnter={disableControls}
      onMouseLeave={enableControls}
    >
      <div className="flex w-full jutify-end">
        <button className="appearance-none p-2 ml-auto">
          <IoClose color="#fff" size={24} />
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
