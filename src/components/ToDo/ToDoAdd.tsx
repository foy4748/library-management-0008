"use client";
import { addTodo } from "@/actions/toDoActions";
import React from "react";
function ToDoAdd() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const task = form.task.value;
    const formData = new FormData();
    formData.set("task", task);
    const result = await addTodo(formData);
    form.reset();
    console.log(result);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="task" type="text" placeholder="Enter task" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ToDoAdd;
