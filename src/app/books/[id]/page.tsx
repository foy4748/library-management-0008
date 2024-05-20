import { IBook } from "@/Models/Books";
import { getSingleBook } from "@/actions/bookActions";
import BorrowBook from "@/components/Books/BorrowBook";
import pickKeys from "@/utils/pickKeys";

async function SingleBookDetails({ params }: { params: { id: string } }) {
  const { id } = params;
  const singleBookData = (await getSingleBook(id)) as IBook;

  const payload = pickKeys(
    singleBookData,
    "book_title",
    "book_img",
    "book_price",
    "book_category",
    "book_category_idx",
    "book_rating",
    "book_author"
  ) as IBook;

  return (
    <div>
      <p>{id}</p>
      <p>{singleBookData?.book_title}</p>
      <p>{singleBookData?.book_quantity}</p>
      <BorrowBook _id={id} payload={payload} />
    </div>
  );
}

export default SingleBookDetails;
