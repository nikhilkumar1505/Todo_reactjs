import React, { useState } from "react";
import { TodoInput, TodoList, TodoItems, FooterButtons } from "./Components";

type todoType = {
  id: string;
  todo: string;
  completed: boolean;
};

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<any>([]);
  const [itemToShow, setItemToShow] = useState<string>("ALL");
  const [editTodo, setEditTodo] = useState<null | todoType>(null);

  const handleChange = (e: any) => setInput(e.target.value);
  console.log(todos);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!editTodo) {
      const newTodo = {
        id: Date.now().toString(),
        todo: input,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    } else {
      updateTodo(editTodo, input);
      setEditTodo(null);
    }
    setInput("");
  };

  const updateTodo = (value: any, input: string) => {
    const { id, _, completed } = value;
    const todo = input;
    setTodos(
      todos.map((val: any) => (val.id === id ? { id, todo, completed } : val))
    );
  };

  const handleDelete = (id: string) => {
    const filteredTodos = todos.filter((todo: any) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const handleEdit = (todo: todoType) => {
    setInput(todo.todo);
    setEditTodo(todo);
  };

  const toggleCompleted = (id: string) => {
    setTodos(
      todos.map((todo: any) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const deleteDoneTask = () => {
    setTodos(todos.filter((todo: any) => !todo.completed));
  };

  const handleShow = (val: string) => setItemToShow(val);

  const clearTodos = () => setTodos([]);

  let item = [];
  if (itemToShow === "ALL") {
    item = todos;
  } else if (itemToShow === "DONE") {
    item = todos.filter((todo: any) => todo.completed);
  } else {
    item = todos.filter((todo: any) => !todo.completed);
  }
  return (
    <>
      <TodoInput
        input={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isEditRequest={Boolean(editTodo)}
      />
      <TodoList handleShow={handleShow} />
      {item.map((todo: todoType) => (
        <TodoItems
          key={todo.id}
          todos={todo}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          toggleCompleted={toggleCompleted}
        />
      ))}

      <FooterButtons clearTodos={clearTodos} deleteDoneTask={deleteDoneTask} />
    </>
  );
}

export default Todo;
