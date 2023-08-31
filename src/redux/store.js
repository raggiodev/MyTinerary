import { configureStore } from '@reduxjs/toolkit';

import cityReducer from './city/cityReducer';

const store = configureStore({
  reducer: {
    city: cityReducer,
  },
});

export default store;