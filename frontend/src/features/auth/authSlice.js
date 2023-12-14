// authSlice will place our authorization (token/playerInfo) into localStorage so client can access

import { createSlice } from '@reduxjs/toolkit'

// create initialState... CHECK IF 'playerInfo' IS IN LOCAL STORAGE and PARSE
const initialState = {
  playerInfo: localStorage.getItem('playerInfo')
    ? JSON.parse(localStorage.getItem('playerInfo'))
    : null,
}

// we'll use the data from localStorage to set the token/credentials
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.playerInfo = state.payload
      localStorage.setItem('playerInfo', JSON.stringify(action.payload))
    },
    logout: (state, action) => {
      state.playerInfo = null
      localStorage.removeItem('playerInfo')
    },
  },
})

export const { setCredentials, logout } = authSlice.actions

export default authSlice.reducer
