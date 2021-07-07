import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductStockService } from 'src/app/services/product-stock.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit, OnDestroy {

  @Input() product!: any;
  nameNumberCharacters: boolean;
  brandNameNumberCharacters: boolean;

  productStockByProducuctIdSubscription!: Subscription;

  // quantity: number;
  productStockByProduct: any;

  constructor(private productService: ProductsService, private productStockService: ProductStockService) {
    this.nameNumberCharacters = false;
    this.brandNameNumberCharacters = false;
  }

  ngOnInit(): void {
    this.productStockByProducuctIdSubscription = this.productStockService.productStockByProductIdSubject
      .subscribe((productStock: any) => {
        this.productStockByProduct = productStock
      });
    this.productStockByProduct = this.productStockService.getProductStockByProductId(this.product.id);
    this.resizeToFit();
  }

  ngOnDestroy(): void {
    this.productStockByProducuctIdSubscription?.unsubscribe();
  };

  resizeToFit() {
    const productName: string = this.product.name;
    const productBrandName: string = this.product.brand.name;
    if (productName.length > 22) {
      this.nameNumberCharacters = true;
    }
    if (productBrandName.length > 22) {
      this.brandNameNumberCharacters = true;
    }
  }

}
