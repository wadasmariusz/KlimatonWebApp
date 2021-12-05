import { useModal } from "../../../app/hooks/useModal";
import { useMap } from "react-leaflet";
import { AiOutlinePlus } from "react-icons/all";
import ReactCircleModal from "react-circle-modal";
import ReportForm from "./ReportForm";

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
      <ReactCircleModal
        backgroundColor="#f4f5f6"
        toogleComponent={(onClick) => (
          <button
            type="button"
            onMouseEnter={disableControls}
            onMouseLeave={enableControls}
            onClick={onClick}
            className="flex items-center gap-4 p-4 bg-yellow-400 hover:bg-yellow-300 absolute left-8 bottom-8 cursor-pointer rounded text-lg"
            style={{ zIndex: "99999" }}
          >
            <AiOutlinePlus color="currentColor" />
            Dodaj zgłoszenie
          </button>
        )}
        // Optional fields and their default values
        offsetX={0}
        offsetY={0}
      >
        {(onClick) => (
          <div
            id="authentication-modal"
            aria-hidden="true"
            className="overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center flex"
          >
            <div className="relative w-full max-w-xl px-4 h-full md:h-auto">
              <ReportForm closeModal={onClick} />
            </div>
          </div>
        )}
      </ReactCircleModal>
    </>
  );
};

export default AddReport;
