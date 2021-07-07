import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BrandsService } from 'src/app/services/brands.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products: any;
  brands: any;

  productsSubscription!: Subscription;
  brandsSubscription!: Subscription;

  constructor(private productService: ProductsService, private brandService: BrandsService) { 
  }

  ngOnInit(): void {
    this.productsSubscription = this.productService.productsSubject
      .subscribe((products: any) => {
      this.products = products
    });

    this.brandsSubscription = this.brandService.brandsSubject
    .subscribe((brands: any) => {
    this.brands = brands
  });
  this.productService.getProducts();
  this.brandService.getBrands();
  };

  ngOnDestroy(): void {
    this.productsSubscription?.unsubscribe();
  };

}
