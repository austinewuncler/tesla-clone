import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

interface CarState {
  cars: string[];
}

const initialState: CarState = {
  cars: ['Model 3', 'Model S', 'Model X', 'Model Y'],
};

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {},
});

export const selectCars = (state: RootState) => state.car.cars;

export default carSlice.reducer;
