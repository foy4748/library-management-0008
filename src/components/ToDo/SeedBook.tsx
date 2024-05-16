"use client";
import { seedDb } from "@/actions/bookActions";

const SeedBooks = () => {
  const handleSubmit = async () => {
    const res = await seedDb();
    console.log(res);
  };
  return <button onClick={handleSubmit}>Seed</button>;
};
export default SeedBooks;
