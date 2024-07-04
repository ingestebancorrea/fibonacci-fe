import { createSlice } from '@reduxjs/toolkit'
import { UserState } from '../../interfaces/interfaces';

const initialState:UserState = {
  users: [
    {
      name: '',
      gender: '',
      username: '',
      password: '',
      phone: '',
      cell: '',
      location: {
        city: '',
        state: '',
        country: ''
      },
      image_url: ''
    }
  ],
  mostUsedLetter: '',
  ocurrences: 0
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEvent: (state, action) => {
      state.users = action.payload;
    }
  },
});

export const {
  setEvent,
} = userSlice.actions;