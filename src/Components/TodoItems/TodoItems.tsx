import React from "react";
import "./style.css";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { ImCheckboxUnchecked } from "react-icons/im";
import { MdModeEditOutline, MdDelete } from "react-icons/md";

type todoType = {
  id: string;
  todo: string;
  completed: boolean;
};

type TodoListProp = {
  todos: todoType;
  handleEdit: (val: any) => void;
  handleDelete: (id: string) => void;
  toggleCompleted: (id: string) => void;
};

function TodoItems({
  todos,
  handleEdit,
  handleDelete,
  toggleCompleted,
}: TodoListProp) {
  const checked = todos.completed;
  const Icons = checked ? AiOutlineCheckSquare : ImCheckboxUnchecked;
  const iconColor = checked ? "#479856" : "#777c80";
  return (
    <>
      <div className="todo-list-container">
        <p className={`todolist-list ${checked ? "delete" : ""}`}>
          {todos.todo}
        </p>
        <div className="todolist-action-btns">
          <div
            onClick={() => toggleCompleted(todos.id)}
            className="action-btn checked"
          >
            <Icons style={{ fontSize: "2rem", color: iconColor }} />
          </div>
          <div onClick={() => handleEdit(todos)} className="action-btn edit">
            <MdModeEditOutline style={{ fontSize: "2rem", color: "#febd13" }} />
          </div>
          <div
            onClick={() => handleDelete(todos.id)}
            className="action-btn delete"
          >
            <MdDelete style={{ fontSize: "2rem", color: "#de3248" }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItems;
