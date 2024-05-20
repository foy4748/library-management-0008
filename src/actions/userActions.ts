"use server";
import Users from "@/Models/Users";
import bcryptjs from "bcryptjs";

export const registerUser = async (email: string, password: string) => {
  try {
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = await Users.create({ email, password: hashedPassword });
    return newUser;
  } catch (error) {
    console.log(error);
    return null;
  }
};
