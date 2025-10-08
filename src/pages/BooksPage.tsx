

import BorrowDialog from "@/components/modules/shared/BorrowDialog";
import DeleteConfirmDialog from "@/components/modules/shared/DeleteConfirmDialog";
import EditBookDialog from "@/components/modules/shared/EditBookDialog";
import { Button } from "@/components/ui/button";
import { useDeleteBookMutation, useGetBooksQuery } from "@/redux/features/Book/book.api";
import type { IBook } from "@/types";
import { BookOpen, Edit3 } from "lucide-react";


export default function BooksPage() {

  const { data, isLoading, isError } = useGetBooksQuery({});
  const [deleteBook] = useDeleteBookMutation();
  // console.log(data)

  if (isLoading) return <div>Loading...</div>;
  if (isError || !data) return <div>Error fetching books.</div>;

  const books: IBook[] = data;
  // console.log(books);
 

  return (
    <div>
      <h1 className="text-2xl text-center font-bold my-5">All Books</h1>
      <div>
        <div className="overflow-x-auto rounded-box border w-full bg-base-100 max-w-7xl mx-auto">
          <table className="table table-xl border border-gray-300 w-full text-center ">
            <thead className="h-4">
              <tr className="border-b border-gray-300 h-10">
                <th className="border-r border-gray-300 px-2">#</th>
                <th className="border-r border-gray-300">Title</th>
                <th className="border-r border-gray-300">Author</th>
                <th className="border-r border-gray-300">ISBN</th>
                <th className="border-r border-gray-300">Genre</th>
                <th className="border-r border-gray-300">Copies</th>
                <th className="border-r border-gray-300">Availability</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {books?.map((book, index) => (
                <tr key={book._id} className="border-b border-gray-200 h-8">
                  <td className="border-r border-gray-200">{index + 1}</td>
                  <td className="border-r border-gray-200">{book.title}</td>
                  <td className="border-r border-gray-200">{book.author}</td>
                  <td className="border-r border-gray-200">{book.isbn}</td>
                  <td className="border-r border-gray-200">{book.genre}</td>
                  <td className="border-r border-gray-200">{book.copies}</td>
                  <td className="border-r border-gray-200">
                    <span
                      className={`badge ${book.available ? "badge-success" : "badge-error"
                        }`}
                    >
                      {book.available ? "Available" : "Unavailable"}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-right flex gap-3 justify-center">
                    <EditBookDialog
                      book={book}
                      trigger={
                        <Button size="sm" variant="outline" title="Edit">
                          <Edit3 className="h-4 w-4" />
                        </Button>
                      }
                    />

                    <DeleteConfirmDialog
                      title="Delete Book?"
                      description={`This will permanently delete "${book.title}".`}
                      onConfirm={() => deleteBook(book._id)}
                    />

                    <BorrowDialog
                      bookId={book._id}
                      availableCopies={book.copies}
                      trigger={
                        <Button
                          size="sm"
                          variant="secondary"
                          title="Borrow"
                        >
                          <BookOpen className="h-4 w-4" />
                        </Button>

                      }
                      
                    />
                     
                  </td>


                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );

}