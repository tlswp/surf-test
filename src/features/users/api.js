import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    searchUsersByEmail: builder.query({
      query: (name) => `/users?email_like=${name}`,
    }),
    getUserByEmail: builder.query({
      query: (name) => `/users?email=${name}`,
    }),
  }),
});

export const { useSearchUsersByEmailQuery } = usersApi;
