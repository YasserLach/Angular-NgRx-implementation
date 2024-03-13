import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as productActions from '../../store/products.actions';
import { isLoadingSelector } from '../../store/products.selectors';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/core/store/AppState';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  isLoading$!: Observable<boolean>;
  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }
  ngOnInit(): void {
    this.store.dispatch(productActions.loadProducts());
  }
}
