import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Products } from '../../models/products';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit , OnDestroy{
  subscription: Subscription;
  productsForm: FormGroup;
  categories = [ { name: 'clothing' },  { name:'jewelery' } ];

  constructor(private productService: ProductsService,private fb: FormBuilder,private toastr: ToastrService, private router:Router) { }

  ngOnInit(): void {
    this.prepareForm();
  }

  prepareForm() { // Prepare Form
    this.productsForm = this.fb.group({
      title: [null , Validators.required],
      price: [null,Validators.required],
      description: [null,Validators.required],
      category: [null,Validators.required],
    }
    );
  }

  addProduct() {
       const productValue = this.productsForm.value;
       this.subscription = this.productService.addProduct(productValue).subscribe((data: Products)=>{
       this.router.navigate(['/products'])
       this.toastr.success('تم إضافة المنتج بنجاح');
    },
    err => {
      this.toastr.warning('حدث خطا');
    }) 
  } 

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
