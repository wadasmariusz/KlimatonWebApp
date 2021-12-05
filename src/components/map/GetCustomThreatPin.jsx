import CustomInundationMarker from "./CustomInundationMarker";
import CustomStoveMarker from "./CustomStoveMarker";
import CustomSmellMarker from "./CustomSmellMarker";
import CustomGarbageMarker from "./CustomGarbageMarker";
import CustomMarker from "./CustomMaker";

const GetCustomThreatMarker = (props) => {
  console.log(props);
  switch (props.type) {
    case 12:
      return <CustomGarbageMarker {...props} />;
    case 4:
      return <CustomInundationMarker {...props} />;
    case 8:
      return <CustomStoveMarker {...props} />;
    case 14:
      return <CustomSmellMarker {...props} />;
    default:
      return <CustomMarker {...props} />;
  }
};

export default GetCustomThreatMarker;
