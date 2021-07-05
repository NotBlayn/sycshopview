import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductStockService {

  productsStocks: any;
  productsStocksSubject = new Subject();

  constructor(private http: HttpClient) { }

  getProductsStocks(): void {
    this.http.get(`${environment.apiUrl}api/product-stock/`).subscribe(productStockList => {
      this.productsStocks = productStockList;
      this.productsStocksSubject.next(this.productsStocks);
    }, error => {
      console.log(error);
    });
  }




}
