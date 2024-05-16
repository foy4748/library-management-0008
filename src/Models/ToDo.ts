import mongoose, { Document, Schema } from "mongoose";

// Define the schema for the ToDo item
interface IToDo extends Document {
  task: string;
  completed: boolean;
}

const ToDoSchema: Schema = new Schema({
  task: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

// Create the model
const ToDos =
  mongoose.models?.ToDo || mongoose.model<IToDo>("ToDo", ToDoSchema);

export default ToDos;
