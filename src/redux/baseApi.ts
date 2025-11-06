import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
//  import axiosBaseQuery from "./axiosBaseQuery"
import config from "@/config";


const baseApi = createApi({
    reducerPath: "baseApi",
    //  baseQuery: axiosBaseQuery(),

    baseQuery: fetchBaseQuery({
        baseUrl: config.baseUrl,
        // credentials: "include",
    }),
    tagTypes: ["BOOK", "BORROW"],
    endpoints: () => ({}),

})

export default baseApi;