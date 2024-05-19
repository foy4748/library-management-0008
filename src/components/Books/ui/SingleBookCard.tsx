import { IBook } from "@/Models/Books";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function SingleBookCard({
  _id,
  book_title,
  book_img,
  book_author,
  book_rating,
  book_category,
  book_quantity,
}: {
  _id: string;
  book_title: string;
  book_img: string;
  book_author: string;
  book_rating: number;
  book_category: string;
  book_quantity?: number;
}) {
  return (
    <div>
      <Link href={`/books/${_id}`}>
        <Image src={book_img} alt={book_title} height={400} width={200} />
      </Link>
    </div>
  );
}

export default SingleBookCard;
