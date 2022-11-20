import { createSlice } from '@reduxjs/toolkit';

interface userState {
  university: string;
  admission_year: string;
  email: string;
}
const initialState: userState = {
  university: '',
  admission_year: '',
  email: '',
};

const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUserForm: (state, action) => {
      state.university = action.payload.university;
      state.admission_year = action.payload.admission_year;
      state.email = action.payload.email;
    },
  },
});

export const { setUserForm } = userSlice.actions;
export default userSlice.reducer;
