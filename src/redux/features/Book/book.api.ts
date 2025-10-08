import baseApi from "@/redux/baseApi";
import type {  IBorrow, IResponse } from "@/types";


 const BooksApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
         createBook: builder.mutation({
                query: (bookData) => ({
                url: "/books/create",
                method: "POST",
                data: bookData,
            }),
            invalidatesTags: ["BOOK"]
         }),
          getBooks: builder.query({
                query: () => ({
                url: "/books",
                method: "GET",
            }),
                providesTags: ["BOOK"],
                transformResponse: (response) => response.data
        }),

            updateBook: builder.mutation({
                query: ({ id, data }) => ({
                url: `/books/${id}`,
                method: 'PATCH',
                data,
             }),
                 invalidatesTags: ['BOOK'],
         }),
            deleteBook: builder.mutation({
                query: (id) => ({
                url: `/books/${id}`,
                method: 'DELETE',
             }),
                invalidatesTags: ['BOOK'],
        }),

            borrowBook: builder.mutation<
                { success: boolean; message: string; data?: unknown },
                { bookId: string; quantity: number; dueDate: string }
                >({
                query: (payload) => ({
                url: "/borrow/create",
                method: "POST",
                body: payload,
                
         }),
  
                invalidatesTags: ["BOOK", "BORROW"],
        }),

        getBorrowSummary: builder.query<IBorrow[], void>({
                query: () => ({
                url: "/borrow/summary",
                method: "GET",
         }),
                providesTags: ["BORROW"],
                transformResponse: (response: IResponse<IBorrow[]>) => response.data,
        }),
    
    }),
})


export const {
    useCreateBookMutation,
    useGetBooksQuery,
    useUpdateBookMutation, 
    useDeleteBookMutation,
    useBorrowBookMutation,
    useGetBorrowSummaryQuery,
 } = BooksApi;


// const initialState:  = {
//    book:[
//     {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     Genre: "Classic Fiction",
//     ISBN: "9780061120084",
//     Copies: 5,
//     Availability: "Available",
//     Actions: ["View", "Edit", "Delete"],
//   },
//    {
//     title: "1984",
//     author: "George Orwell",
//     Genre: "Dystopian",
//     ISBN: "9780451524935",
//     Copies: 2,
//     Availability: "Limited",
//     Actions: ["View", "Edit", "Delete"]
//   },
//   {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     Genre: "Classic Fiction",
//     ISBN: "9780743273565",
//     Copies: 0,
//     Availability: "Out of Stock",
//     Actions: ["View", "Edit", "Delete"]
//   },
//   {
//     title: "The Catcher in the Rye",
//     author: "J.D. Salinger",
//     Genre: "Literary Fiction",
//     ISBN: "9780316769488",
//     Copies: 3,
//     Availability: "Available",
//     Actions: ["View", "Edit", "Delete"]
//   },
//   {
//     title: "Sapiens: A Brief History of Humankind",
//     author: "Yuval Noah Harari",
//     Genre: "Non-fiction",
//     ISBN: "9780062316110",
//     Copies: 4,
//     Availability: "Available",
//     Actions: ["View", "Edit", "Delete"]
//   },
//   {
//     title: "The Hobbit",
//     author: "J.R.R. Tolkien",
//     Genre: "Fantasy",
//     ISBN: "9780547928227",
//     Copies: 1,
//     Availability: "Limited",
//     Actions: ["View", "Edit", "Delete"]
//   }
//    ],
//    filter:"Available",
// };




// const bookSlice = createSlice({
//   name: "book",
//   initialState,
//   reducers: {
    
//   },
// })