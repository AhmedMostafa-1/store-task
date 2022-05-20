import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Products } from '../../models/products';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit , OnDestroy {

  products: Products[];
  subscription: Subscription;
  limitNo = 10;
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.subscription = this.productService.productsList(this.limitNo).subscribe((data: Products[])=>{
      this.products = data;
    })  
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
