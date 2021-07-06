import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: any;
  product: any;

  productsSubject = new Subject();
  productSubject = new Subject();

  constructor(private http: HttpClient) { }

  getProducts(): void {
    this.http.get(`${environment.apiUrl}api/product/`).subscribe(productList => {
      this.products = productList;
      this.productsSubject.next(this.products);
    }, error => {
      console.log(error);
    });
  }

  // getProduct(id: number): void {
  //   this.http.get(`${environment.apiUrl}api/product/${id}`).subscribe(apiProduct => {
  //     this.product = apiProduct;
  //     this.productSubject.next(this.product);
  //   }, error => {
  //     console.log(error);
  //   });
  // }
}