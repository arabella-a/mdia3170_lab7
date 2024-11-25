import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Countries() {

  const [kingdom, setKingdom] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCountryData() {
      try {
        const resp = await fetch("https://restcountries.com/v3.1/name/kingdom");
        const kingdom = await resp.json();
        setKingdom(kingdom);
      } catch (e) {
        console.error(e.message);
      }
    }
    fetchCountryData();
  }, []);

  function handleKingdomChange(e) {
    const selectedKingdom = e.target.value;
    const kingdomData = kingdom.find(
      (kingd) => kingd.name.common === selectedKingdom
    );

    if (kingdomData) {
      navigate(`/countries/${kingdomData.cca2}`, {
        state: { kingdomData },
      });
    }
  }

  return (
    <>
      <div className="container">
        <h1>World Kingdoms</h1>
        <form className="formContainer">
          <select onChange={handleKingdomChange}>
            <option value="all">Select a country</option>
            {kingdom.map((kingd, i) => (
              <option key={i} value={kingd.name.common}>
                {kingd.name.common}
              </option>
            ))}
          </select>
        </form>
      </div>
      <Outlet />
    </>
  );
}
