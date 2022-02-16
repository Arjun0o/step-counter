import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWeatherInfo = createAsyncThunk('weather/info', async () => {
  try {
    const {data} = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=fbbc5458489286efe446af162e2def9e',
    );
    return data?.main;
  } catch (e) {
    console.log(e);
  }
});

type Props = {
  value?: any;
  status: string;
  error?: any;
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    value: {info: {}, status: 'idle', error: {}},
  } as Props,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: builder => {
    builder.addCase(fetchWeatherInfo.pending, state => {
      state.value = {
        status: 'loading',
        info: {},
        error: {},
      };
    });
    builder.addCase(fetchWeatherInfo.fulfilled, (state, action) => {
      state.value = {
        info: action.payload,
        status: 'idle',
        error: {},
      };
    });
    builder.addCase(fetchWeatherInfo.rejected, (state, action) => {
      state.value = {
        info: {},
        status: 'idle',
        error: action.payload,
      };
    });
  },
});

export default weatherSlice.reducer;
