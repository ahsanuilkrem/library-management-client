import { createApi } from "@reduxjs/toolkit/query/react"
import axiosBaseQuery from "./axiosBaseQuery"


 const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: axiosBaseQuery(),
    tagTypes: ["BOOK", "BORROW"],
    endpoints: () => ({}),

})

export default baseApi;