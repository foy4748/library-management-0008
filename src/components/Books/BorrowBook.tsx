"use client";
import { IBook } from "@/Models/Books";
import { borrowBook } from "@/actions/bookActions";
import pickKeys from "@/utils/pickKeys";

function BorrowBook({ _id, bookDetails }: { _id: string; bookDetails: IBook }) {
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
    const payload = pickKeys(
      bookDetails,
      "book_title",
      "book_img",
      "book_price",
      "book_category",
      "book_category_idx",
      "book_rating",
      "book_author"
    );
    const response = await borrowBook(_id, payload);
    console.log(response);
  };
  return <button onClick={handleBorrow}>BorrowBook</button>;
}

export default BorrowBook;
