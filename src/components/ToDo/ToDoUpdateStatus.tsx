"use client";
import { toggleToDoStatus } from "@/actions/toDoActions";
import React, { useState } from "react";

function ToDoUpdateStatus({
  todoId,
  toDoStatus,
}: {
  todoId: string;
  toDoStatus: boolean;
}) {
  const handleUpdate = async () => {
    try {
      const result = await toggleToDoStatus(todoId, toDoStatus);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <span className="cursor-pointer" onClick={handleUpdate}>
      {toDoStatus ? "✅" : "⏳"}
    </span>
  );
}

export default ToDoUpdateStatus;
