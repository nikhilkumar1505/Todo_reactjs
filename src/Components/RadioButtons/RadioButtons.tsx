import React, { useContext } from "react";
import { RootContext } from "../../services/RootContext";
import "./style.css";

function RadioButtons() {
  const genders = ["male", "female", "All"];
  const { gender, setGender } = useContext(RootContext);

  const handleGenders = (e: any) => {
    setGender(e.target.value);
  };

  return (
    <>
      {genders.map((gen, index) => (
        <div key={index}>
          <input
            className="radio-btn"
            type="radio"
            value={gen}
            name="gender"
            id={gen}
            checked={gender === gen}
            onChange={handleGenders}
          />
          <label className="radio-btn-label" htmlFor={`${gen}`}>
            {gen}
          </label>
        </div>
      ))}
    </>
  );
}

export default RadioButtons;
