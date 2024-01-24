import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'http://localhost:1337/api/';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['about'],
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAbout: builder.query({
      query: () => 'abouts?populate=*',
    }),
  }),
});

export const useGetAboutQuery = api;
