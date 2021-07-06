import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductStockService } from 'src/app/services/product-stock.service';

@Component({
  selector: 'app-product-stock-list',
  templateUrl: './product-stock-list.component.html',
  styleUrls: ['./product-stock-list.component.scss']
})
export class ProductStockListComponent implements OnInit {

  productsStocks: any;
  productsStocksSubscription!: Subscription;

  constructor(private productStockService: ProductStockService) { }

  ngOnInit(): void {
    this.productsStocksSubscription = this.productStockService.productsStocksSubject
      .subscribe((productsStocks: any) => {
      this.productsStocks = productsStocks
    });

  this.productStockService.getProductsStocks();
  };

  ngOnDestroy(): void {
    this.productsStocksSubscription?.unsubscribe();
  };
}
