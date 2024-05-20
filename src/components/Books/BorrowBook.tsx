"use client";
import { IBook } from "@/Models/Books";
import { borrowBook } from "@/actions/bookActions";

function BorrowBook({ _id, payload }: { _id: string; payload: IBook }) {
  const handleBorrow = async () => {
    /*
    book_title: String,
    book_img: String,
    book_price: Number,
    book_category: String,
    book_category_idx: Number,
    book_rating: Number,
    book_author: String,

  */
    const response = await borrowBook(_id, payload);
    console.log(response);
  };
  return <button onClick={handleBorrow}>BorrowBook</button>;
}

export default BorrowBook;
