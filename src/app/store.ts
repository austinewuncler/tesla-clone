import { configureStore } from '@reduxjs/toolkit';

import carReducer from '../features/car/car.slice';

export const store = configureStore({
  reducer: { car: carReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
