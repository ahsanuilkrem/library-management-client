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










