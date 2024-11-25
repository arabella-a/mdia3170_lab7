import { useLocation } from "react-router-dom";

export default function Details() {
  const { state } = useLocation();
  const kingdomData = state?.kingdomData;

  return (
    <>
      <div className="detailsContainer">
        <h2>{kingdomData?.name?.common}</h2>
        <img src={kingdomData?.flags?.png} alt={` flag of ${kingdomData?.name?.common}`} />
        <div className="listContainer">
            <ul>
                <li><span>Capital: </span> {kingdomData?.capital?.[0] || "None"}</li>
                <li><span>Located in: </span> {kingdomData?.subregion || "None"}</li>
            </ul>
        </div>
      </div>
    </>
  );
}
