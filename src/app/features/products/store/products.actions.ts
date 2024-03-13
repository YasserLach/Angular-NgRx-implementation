import { createAction, props } from '@ngrx/store';
import { Product } from '../model/Product';

export const loadProducts = createAction('[Products Page] load products');
export const loadProductsSuccess = createAction(
  '[Products Page] load products success',
  props<{ products: Product[] }>()
);
export const loadProductsFailure = createAction(
  '[Products Page] load products failure',
  props<{ error: string }>()
);
