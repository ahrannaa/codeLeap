import { createSlice } from "@reduxjs/toolkit"

export const slice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    isLogged: false,
  },
  reducers: {
    signup(state, { payload }) {
      return { ...state, isLogged: true, username: payload }
    },
    logout(state) {
      return { ...state, isLogged: false, username: '' }
    }
  }
})

export const { signup, logout } = slice.actions

export const selectUser = state => state.user

export default slice.reducer