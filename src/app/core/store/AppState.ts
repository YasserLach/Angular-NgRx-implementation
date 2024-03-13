import { ProductsEffects } from './../../features/products/store/products.effects';
import { productReducer } from 'src/app/features/products/store/products.reducers';
import { ProductState } from 'src/app/features/products/store/products.state';

export interface AppStateInterface {
  products_State: ProductState;
}

export const AppReducer = {
  products: productReducer,
};

export const AppEffects = [ProductsEffects];
