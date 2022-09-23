import {createReducer} from '@reduxjs/toolkit';
import { setDataLoadedStatus, loadCities } from './action';
import { offerType } from '../types/types';

const initialState = {
  offers: [] as offerType[],
  isDataLoaded: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(loadCities, (state, action) => {
      state.offers = action.payload;
    });
});
