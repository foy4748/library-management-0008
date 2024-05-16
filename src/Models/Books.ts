import mongoose, { Document, Schema } from "mongoose";

// Define the schema for the Book item
export interface IBook extends Document {
  book_title: string;
  book_img: string;
  book_price: number;
  book_category: string;
  book_category_idx: number;
  book_rating: number;
  book_author: string;
  book_quantity: number;
}

const BookSchema: Schema = new Schema(
  {
    book_title: String,
    book_img: String,
    book_price: Number,
    book_category: String,
    book_category_idx: Number,
    book_rating: Number,
    book_author: String,
    book_quantity: { type: Number, default: 5 },
  },
  {
    timestamps: true,
  }
);

// Create the model
const Books =
  mongoose.models?.Book || mongoose.model<IBook>("Book", BookSchema);

export default Books;
