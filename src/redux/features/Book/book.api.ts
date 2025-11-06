import baseApi from "@/redux/baseApi";
import type {  IBook, IBorrow, IResponse } from "@/types";


 const BooksApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
         createBook: builder.mutation({
                query: (payload) => ({
                url: "/books/create",
                method: "POST",
                body: payload,
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
                 getBookById: builder.query<{ data: IBook }, string>({
                    query: (id) => ({
                        url: `/books/${id}`,
                        method: "GET"
                    }),
                    providesTags: ["BOOK"],
                }),

            updateBook: builder.mutation({
                query: ({ id, body }) => ({
                url: `/books/${id}`,
                method: 'PATCH',
                body,
           
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
    useGetBookByIdQuery,
    useUpdateBookMutation, 
    useDeleteBookMutation,
    useBorrowBookMutation,
    useGetBorrowSummaryQuery,
 } = BooksApi;


// const initialState:  = {
//    book:[

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
//     title: "apiens: A Brief History of HumankindS",
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