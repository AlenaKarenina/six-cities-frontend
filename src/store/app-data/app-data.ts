import { createSlice } from '@reduxjs/toolkit';
import { AppData } from '../../types/state';
import {NameSpace} from '../../const';
import { fetchOfferAction, fetchOffersAction, fetchNearbyOffersAction, fetchReviewsOfferAction } from '../api-actions';
import { Offer } from '../../types/offers';

const initialState: AppData = {
  offers: [],
  offer: {} as Offer,
  nearby: [],
  comments: [],
  isOffersDataLoading: false,
  isDetailsOfferDataLoading: false,
  isOfferNearbyDataLoading: false,
  isReviewsDataLoading: false,
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.isDetailsOfferDataLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isDetailsOfferDataLoading = false;
      })
      .addCase(fetchNearbyOffersAction.pending, (state) => {
        state.isOfferNearbyDataLoading = true;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearby = action.payload;
        state.isOfferNearbyDataLoading = false;
      })
      .addCase(fetchReviewsOfferAction.pending, (state) => {
        state.isReviewsDataLoading = true;
      })
      .addCase(fetchReviewsOfferAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isReviewsDataLoading = false;
      });
  }
});
