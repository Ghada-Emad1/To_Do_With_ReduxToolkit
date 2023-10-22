import { useSelect } from "@material-tailwind/react";
import React from "react";
import { useSelector } from "react-redux";
import { selectFilteredTodoIds } from "../ReducerSlices/todoSlice";
import ToDoItem from "./ToDoItem";
const TodoList = () => {
  const todoId = useSelector(selectFilteredTodoIds);
  const LoadingStatus = useSelector((state) => state.todos.status);
  if (LoadingStatus === "Loading") {
    return (
      <div className="todo-list">
        <div className="loader"></div>
      </div>
    );
  }
  const renderedListItems = todoId.map((todoId) => {
    return <ToDoItem key={todoId} id={todoId} />;
  });
  return (
    <div>
      <ul className="todo-list">
        {renderedListItems}
      </ul>
    </div>
  );
};

export default TodoList;
