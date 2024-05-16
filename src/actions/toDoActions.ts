"use server";
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

import ToDo from "@/Models/ToDo";
import { revalidatePath } from "next/cache";

export async function addTodo(formData: FormData) {
  const paylaod = { task: formData.get("task") };
  try {
    const result = await ToDo.create(paylaod);
    revalidatePath("/");
    for (let value in formData.values()) {
      console.log(value);
    }
    formData.set("task", "");
    return {
      error: false,
      message: "Succesfully POSTED a ToDo",
      result,
    };
  } catch (error) {
    console.log(error);
    return { error: true, message: "Failed to post TODO" };
  }
}

export async function toggleToDoStatus(todoId: string, currentStatus: boolean) {
  try {
    const query = { _id: new ObjectId(todoId) };
    const result = await ToDo.updateOne(query, {
      $set: { completed: !currentStatus },
    });

    revalidatePath("/");
    return { error: false, message: "Succesfully UPDATED task status", result };
  } catch (error) {
    console.dir(error);
    return { error: false, message: "Failed to update task status" };
  }
}

export async function deleteToDo(todoId: string) {
  try {
    const query = { _id: new ObjectId(todoId) };
    const result = await ToDo.deleteOne(query);

    revalidatePath("/");
    return { error: false, message: "Succesfully DELETED task status", result };
  } catch (error) {
    console.dir(error);
    return { error: false, message: "Failed to update task status" };
  }
}
