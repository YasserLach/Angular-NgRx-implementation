import { Product } from '../model/Product';

export interface ProductState {
  products: Product[];
  isLoading: boolean;
  error: string | null;
}
