import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Products } from '../../models/products';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit , OnDestroy{
  productId: string;
  products:Products;
  subscription: Subscription;
  constructor(private productService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( (params:any) => this.productId =params.id);
    (!!this.productId) && this.getProductById()
  }

  getProductById() {
    this.subscription = this.productService.getProductById(this.productId)
    .subscribe((data: Products)=>{
      this.products = data;
    })
  } 

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
