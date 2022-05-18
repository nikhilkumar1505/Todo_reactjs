import React from "react";
import "./style.css";
import { AiFillProfile } from "react-icons/ai";
import { Buttons } from "../Buttons";

interface InputProps {
  input: string;
  handleChange: (value: any) => void;
  handleSubmit: (value: any) => void;
  isEditRequest: Boolean;
}

function TodoInput({
  input,
  handleChange,
  handleSubmit,
  isEditRequest,
}: InputProps) {
  return (
    <div className="container">
      <h1>TodoInput</h1>
      <div className="input-card">
        <div className="file-icon-card">
          <AiFillProfile
            style={{
              color: "#53aebf",
              fontSize: "5.4rem",
              borderColor: "#d0d4d3",
            }}
          />
          <div className="input-container">
            <input
              type="text"
              placeholder="New Todo"
              value={input}
              onChange={handleChange}
            />
          </div>
        </div>
        <Buttons
          text={isEditRequest ? "Edit Task" : "Add new task"}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

export default TodoInput;
