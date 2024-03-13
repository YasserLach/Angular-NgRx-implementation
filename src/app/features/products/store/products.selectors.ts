import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/core/store/AppState';

export const selectFeature = (state: AppStateInterface) => state.products_State;

export const productsSelector = createSelector(
  selectFeature,
  (state) => state.products
);
export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);
export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);
