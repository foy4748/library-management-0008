import ToDo from "@/Models/ToDo";
import ToDoAdd from "./ToDoAdd";
import ToDoUpdateStatus from "./ToDoUpdateStatus";
import ToDoDelete from "./ToDoDelete";
import SingleBookCard from "@/components/Books/ui/SingleBookCard";
import { getAllBooks } from "@/actions/bookActions";
import { IBook } from "@/Models/Books";
import Layout from "@/components/ui/Layout";
//import SeedBooks from "./SeedBook";
async function ToDoView() {
  const data = await ToDo.find({});
  const bookData = (await getAllBooks()) as IBook[];
  return (
    <>
      <div>
        <p>ToDo List || {data?.length}</p>
        {data.map((d) => {
          return (
            <div key={d._id} className="group">
              <p>
                {d.task}{" "}
                <ToDoUpdateStatus todoId={d._id} toDoStatus={d.completed} />
                <ToDoDelete todoId={d._id} />
              </p>
            </div>
          );
        })}
        <ToDoAdd />
      </div>
      <div>
        <Layout>
          {bookData?.map((b) => {
            return (
              <SingleBookCard
                key={b._id}
                _id={b._id}
                book_title={b.book_title}
                book_img={b.book_img}
                book_rating={b.book_rating}
                book_category={b.book_category}
                book_quantity={b.book_quantity}
                book_author={b.book_author}
              />
            );
          })}
        </Layout>
      </div>
    </>
  );
}

export default ToDoView;
