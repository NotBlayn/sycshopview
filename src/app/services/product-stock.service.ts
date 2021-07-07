import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductStockService {

  productsStocks: any;
  productStockByProductId: any;

  productsStocksSubject = new Subject();
  productStockByProductIdSubject = new Subject();

  constructor(private http: HttpClient) { }

  getProductsStocks(): void {
    this.http.get(`${environment.apiUrl}api/product-stock/`).subscribe(productStockList => {
      this.productsStocks = productStockList;
      this.productsStocksSubject.next(this.productsStocks);
    }, error => {
      console.log(error);
    });
  }
  getProductStockByProductId(id: number): void {
    this.http.get(`${environment.apiUrl}api/product-stock/product/${id}/`).subscribe(productStockApi => {
      this.productStockByProductId = productStockApi;
      this.productStockByProductIdSubject.next(this.productStockByProductId);
    }, error => {
      console.log(error);
    });
  }





}
