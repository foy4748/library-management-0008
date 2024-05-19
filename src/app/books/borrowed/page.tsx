import { getBorrowedBooks } from "@/actions/bookActions";
import SingleBookCard from "@/components/Books/ui/SingleBookCard";
import Layout from "@/components/ui/Layout";

async function BorrowedBooks() {
  const borrowBooks = await getBorrowedBooks();
  return (
    <div>
      <Layout>
        {borrowBooks?.map((b) => {
          return (
            <SingleBookCard
              key={String(b._id)}
              _id={String(b._id)}
              book_title={b.book_title}
              book_img={b.book_img}
              book_rating={b.book_rating}
              book_category={b.book_category}
              book_author={b.book_author}
            />
          );
        })}
      </Layout>
    </div>
  );
}

export default BorrowedBooks;
