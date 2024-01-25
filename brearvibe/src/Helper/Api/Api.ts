import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'http://localhost:1337/api/';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL, }),
  endpoints: (builder) => ({
    getAbout: builder.query({
      query: () => 'abouts?populate=*',
    }),
    getContact: builder.query({
      query: () => 'contacts?populate=*',
    }),
  }),
});

export const { useGetAboutQuery, useGetContactQuery } = api;
