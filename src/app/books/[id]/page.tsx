import { IBook } from "@/Models/Books";
import { getSingleBook } from "@/actions/bookActions";
import BorrowBook from "@/components/Books/BorrowBook";

async function SingleBookDetails({ params }: { params: { id: string } }) {
  const { id } = params;
  const singleBookData = (await getSingleBook(id)) as IBook;

  return (
    <div>
      <p>{id}</p>
      <p>{singleBookData?.book_title}</p>
      <p>{singleBookData?.book_quantity}</p>
      <BorrowBook _id={id} bookDetails={singleBookData} />
    </div>
  );
}

export default SingleBookDetails;
