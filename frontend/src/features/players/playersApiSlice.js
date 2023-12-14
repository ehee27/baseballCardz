import { apiSlice } from '../slices/apiSlice'

const PLAYERS_URL = '/api/players'

export const playersApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    register: builder.mutation({
      query: data => ({
        url: `${PLAYERS_URL}`,
        method: 'POST',
        body: data,
      }),
    }),
    login: builder.mutation({
      query: data => ({
        url: `${PLAYERS_URL}/auth`,
        method: 'POST',
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: data => ({
        url: `${PLAYERS_URL}/logout`,
        method: 'POST',
        body: data,
      }),
    }),
    update: builder.mutation({
      query: data => ({
        url: `${PLAYERS_URL}/profile`,
        method: 'PUT',
        body: data,
      }),
    }),
    // created an 'uploadPic' mutation that hits the /profile/upload endpoint
    uploadPic: builder.mutation({
      query: data => ({
        url: `${PLAYERS_URL}/profile/upload`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useUpdateMutation,
  useUploadPicMutation,
} = playersApiSlice
