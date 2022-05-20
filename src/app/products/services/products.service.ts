import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private REST_API_SERVER = "https://fakestoreapi.com/products";

  constructor(private http: HttpClient) { }

   productsList(limitNo){
    return this.http.get(`${this.REST_API_SERVER}?limit=${limitNo}`);
  }

  getProductById(Product_ID) {
    return this.http.get(`${this.REST_API_SERVER}/${Product_ID}`);
  }

  addProduct(Dto) {
    return this.http.post(`${this.REST_API_SERVER}`,Dto);
  }
}