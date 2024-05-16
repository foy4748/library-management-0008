import React from "react";
import { IUser } from "../page";

type TSingleUserParams = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = (await res.json()) as IUser[];
  return data.map((d) => {
    return { id: String(d.id) };
  });
}

async function SingleUser({ params }: TSingleUserParams) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const data = await res.json();
  return (
    <div>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}

export default SingleUser;
