import React, { useContext } from "react";
import { RootContext } from "../../context/RootContext";
import "./style.css";
function Dropdown() {
  const countrycode = [
    "AU",
    "BR",
    "CA",
    "CH",
    "DE",
    "DK",
    "ES",
    "FI",
    "FR",
    "GB",
    "IE",
    "IR",
    "NO",
    "NL",
    "NZ",
    "TR",
    "US",
  ];
  const {
    state: { nat },
    action: { changeNationality },
  } = useContext(RootContext);

  const handleChange = (e: any) => {
    changeNationality(e.target.value);
  };
  return (
    <div style={{ marginTop: "1rem" }}>
      <h1>Select Nationality:</h1>
      <select value={nat} onChange={handleChange}>
        {countrycode.map((code, id) => (
          <option key={id} value={code} label={code} />
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
