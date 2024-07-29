import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({ baseUrl: import.meta.env.VITE_EVENT_API });

export const fibonacciApi = createApi({
  reducerPath: "fibonacciApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getFibonacci: builder.query<number, number>({
      query: (date) => `/${date}`,
    }),
  }),
});

export const { useGetFibonacciQuery } = fibonacciApi;
