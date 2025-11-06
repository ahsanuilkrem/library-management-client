import App from "@/App";
import BookDetails from "@/components/modules/books/BookDetails";
import About from "@/pages/About";
import AddBook from "@/pages/AddBook";
import BooksPage from "@/pages/BooksPage";
import BorrowSummary from "@/pages/BorrowSummary";

import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                index: true,
                path: "/",
                Component: Home,
            },

            {
                path: "/booksPage",
                Component: BooksPage,
            },
            {
                path: "/addBook",
                Component: AddBook,
              
            },
            {
                path: "/books/:id",
                Component: BookDetails,
              
            },
            {
                path: "/BorrowSummary",
                element: <BorrowSummary></BorrowSummary> 
            },
            {
                path: "/about",
                element: <About></About> 
            }
        ],

    },


])

export default router;