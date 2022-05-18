import React from "react";
import { Buttons } from "../Buttons";
import "./style.css";

type buttonProps = {
  handleShow: (val: string) => void;
};

function TodoList({ handleShow }: buttonProps) {
  return (
    <>
      <h1>TodoList</h1>
      <div className="buttons-container">
        <Buttons
          text="All"
          others={{ flex: 1, margin: "0 2.3rem 0 0" }}
          onClick={() => handleShow("ALL")}
        />
        <Buttons
          text="Done"
          others={{ flex: 1, margin: "0 2.3rem" }}
          onClick={() => handleShow("DONE")}
        />
        <Buttons
          text="Todo"
          others={{ flex: 1, margin: "0 0 0 2.3rem" }}
          onClick={() => handleShow("TODO")}
        />
      </div>
    </>
  );
}

export default TodoList;
