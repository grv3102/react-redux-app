import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const articlepi = createApi({
  reducerPath: "articlepi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getAllArticles: builder.query({
      query: () => `/articles`,
    }),
    getArticleById: builder.query({
      query: (id) => `/articles/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllArticlesQuery, useGetArticleByIdQuery } = articlepi;
