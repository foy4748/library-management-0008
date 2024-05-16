import ToDoView from "@/components/ToDo/ToDoView";
import Link from "next/link";
import React from "react";

export interface IUserGeo {
  lat: string;
  lng: string;
}

export interface IUserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IUserGeo;
}

export interface IUserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IUserAddress;
  phone: string;
  website: string;
  company: IUserCompany;
}

export default async function Home() {
  // const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // const data = (await res.json()) as IUser[];
  return (
    <main>
      <section className="grid grid-cols-3 gap-4">
        <ToDoView />
      </section>
    </main>
  );
}

/*
        {data &&
          data.map((d) => {
            return (
              <Link key={d.id} href={`/${d.id}`}>
                <div className="flex justify-center items-center text-center border">
                  <div>
                    <h1>{d.name}</h1>
                    <p>{d.company.name}</p>
                  </div>
                </div>
              </Link>
            );
          })}
*/
