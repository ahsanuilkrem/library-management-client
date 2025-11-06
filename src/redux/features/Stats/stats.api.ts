import baseApi from "@/redux/baseApi";
import type { IResponse } from "@/types";

export const statsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getStats: builder.query<IResponse<unknown>, void>({
      query: () => "/stats",
    }),
  }),
});

export const { useGetStatsQuery } = statsApi;