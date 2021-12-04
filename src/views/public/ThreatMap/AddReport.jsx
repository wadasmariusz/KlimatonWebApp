import { useModal } from "../../../app/hooks/useModal";
import { useMap } from "react-leaflet";
import { AiOutlinePlus } from "react-icons/all";
import ReactCircleModal from "react-circle-modal";

const AddReport = () => {
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
    <>
      <button
        onMouseEnter={disableControls}
        onMouseLeave={enableControls}
        onClick={() => open()}
        className="flex items-center gap-4 p-4 bg-gray-100 hover:bg-gray-50 absolute left-8 bottom-8 cursor-pointer rounded text-lg"
        style={{ zIndex: "99999" }}
      >
        <AiOutlinePlus color="currentColor" />
        Dodaj zgłoszenie
      </button>
      <ReactCircleModal
        backgroundColor="#f4f5f6"
        toogleComponent={(onClick) => (
          <button onClick={onClick}>Click here to open modal</button>
        )}
        // Optional fields and their default values
        offsetX={0}
        offsetY={0}
      >
        {(onClick) => (
          <div style={{ backgroundColor: "#fff", padding: "1em" }}>
            <p>Content inside of modal</p>
            <button onClick={onClick}>Click here to close modal</button>
          </div>
        )}
      </ReactCircleModal>
    </>
  );
};

export default AddReport;
