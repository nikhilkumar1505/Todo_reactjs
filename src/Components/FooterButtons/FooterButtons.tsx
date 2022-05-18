import React from "react";
import { Buttons } from "../Buttons";
import "./style.css";

type FooterButtonProps = {
  deleteDoneTask: () => void;
  clearTodos: () => void;
};

function FooterButtons({ deleteDoneTask, clearTodos }: FooterButtonProps) {
  return (
    <div className="footer-btn">
      <Buttons
        color="#de3248"
        onClick={deleteDoneTask}
        text="Delete done tasks"
        others={{ flex: 1, marginRight: "1.5rem" }}
      />
      <Buttons
        color="#de3248"
        onClick={clearTodos}
        text="Delete all tasks"
        others={{ flex: 1, marginLeft: "1.5rem" }}
      />
    </div>
  );
}

export default FooterButtons;
