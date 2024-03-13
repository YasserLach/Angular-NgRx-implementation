import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../service/product.service';
import * as productActions from './products.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductsEffects {
  getProducts$ = createEffect(() =>
    this.action$.pipe(
      ofType(productActions.loadProducts),
      mergeMap(() => {
        return this.productService.getProducts().pipe(
          map((products) => productActions.loadProductsSuccess({ products })),
          catchError((error) =>
            of(productActions.loadProductsFailure({ error: error.message }))
          )
        );
      })
    )
  );

  constructor(
    private action$: Actions,
    private productService: ProductService
  ) {}
}
