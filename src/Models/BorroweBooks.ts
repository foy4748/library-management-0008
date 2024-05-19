import mongoose, { Document, Schema } from "mongoose";

// Define the schema for the BorrowedBook item
export interface IBorrowedBook extends Document {
  book_id: string;
  book_title: string;
  book_img: string;
  book_price: number;
  book_category: string;
  book_category_idx: number;
  book_rating: number;
  book_author: string;
}

const BorrowedBookSchema: Schema = new Schema<IBorrowedBook>(
  {
    book_title: String,
    book_img: String,
    book_id: String,
    book_price: Number,
    book_category: String,
    book_category_idx: Number,
    book_rating: Number,
    book_author: String,
  },
  {
    timestamps: true,
  }
);

// Create the model
const BorrowedBooks =
  mongoose.models?.BorrowedBook ||
  mongoose.model<IBorrowedBook>("BorrowedBook", BorrowedBookSchema);

export default BorrowedBooks;
