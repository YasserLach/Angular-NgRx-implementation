import { createReducer, on } from '@ngrx/store';
import { ProductState } from './products.state';
import * as productActions from './products.actions';

export const initialState: ProductState = {
  products: [],
  isLoading: false,
  error: null,
};

export const productReducer = createReducer(
  initialState,
  on(productActions.loadProducts, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(productActions.loadProductsSuccess, (state, action) => ({
    ...state,
    products: action.products,
    isLoading: false,
    error: null,
  })),
  on(productActions.loadProductsFailure, (state, action) => ({
    ...state,
    isLoading: true,
    error: action.error,
  }))
);
