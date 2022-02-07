import {createSlice} from '@reduxjs/toolkit';

export const stepSlice = createSlice({
  name: 'step',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
  },
});

export const {increment} = stepSlice.actions;
export default stepSlice.reducer;
