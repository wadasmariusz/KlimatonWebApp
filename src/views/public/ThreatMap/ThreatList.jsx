import ThreatListItem from "./ThreatListItem";

const ThreatList = ({ data }) => {
  return (
    <div className="overflow-y-auto flex flex-col gap-4 mb-10 pr-4 h-full">
      {data.map((item) => (
        <ThreatListItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ThreatList;
