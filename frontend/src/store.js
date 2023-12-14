import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './features/slices/apiSlice'
import authReducer from './features/auth/authSlice'
import { playersApi } from './features/players/playerSlice'

const store = configureStore({
  reducer: {
    // the authReducer key and value
    auth: authReducer,
    players: playersApi.reducer,
    // the apiSlice key and value
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    // add the apiSlice by concat()
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
})

export default store
