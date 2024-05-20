import mongoose, { Document, Schema } from "mongoose";

// Define the schema for the User item
export interface IUser extends Document {
  email: string;
  password: string;
  role: "user" | "admin";
}

const UserSchema: Schema = new Schema<IUser>(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

// Create the model
const Users =
  mongoose.models?.User || mongoose.model<IUser>("User", UserSchema);

export default Users;
