import {configureStore} from '@reduxjs/toolkit';
import stepReducer from './stepSlice';
import weatherReducer from './weatherSlice';

export default configureStore({
  reducer: {
    step: stepReducer,
    weather: weatherReducer,
  },
});
