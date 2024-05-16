"use client";
import { deleteToDo } from "@/actions/toDoActions";
import React from "react";

function ToDoDelete({ todoId }: { todoId: string }) {
  const handleDelete = async () => {
    try {
      const result = await deleteToDo(todoId);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <span
      className="cursor-pointer invisible group-hover:visible"
      onClick={handleDelete}
    >
      ❌
    </span>
  );
}

export default ToDoDelete;
