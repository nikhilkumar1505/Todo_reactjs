import React from "react";
import "./style.css";

interface ButtonProps {
  color?: string;
  text?: string;
  onClick?: (value?:any) => void;
  others?: any;
}

const Buttons: React.FC<ButtonProps> = ({
  color = "#53aebf",
  text,
  onClick,
  others,
}) => {
  const buttonStyle = {
    backgroundColor: color,
    borderRadius: "4px",
    ...others,
  };
  return (
    <div onClick={onClick} className="button" style={buttonStyle}>
      <p className="button-text">{text}</p>
    </div>
  );
};
export default Buttons;
