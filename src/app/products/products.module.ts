import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NumbersOnlyDirective } from '../shared/directives/numbers-only.directive';
import { LettersOnlyDirective } from '../shared/directives/letters-only.directive';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    ProductsDetailsComponent,
    AddProductComponent,
    NumbersOnlyDirective,
    LettersOnlyDirective
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    ToastrModule

  ]
})
export class ProductsModule { }
