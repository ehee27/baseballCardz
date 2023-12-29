// this sets the foundation (base) of all queries
// we're CREATING AN API

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://baseballcardz-api.onrender.com',
  // baseUrl: 'http://localhost:3500',
})

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Player', 'Coach'],
  endpoints: builder => ({}),
})
