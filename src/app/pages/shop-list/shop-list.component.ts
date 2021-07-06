import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BrandsService } from 'src/app/services/brands.service';
import { ProductsService } from 'src/app/services/products.service';
import { ShopsService } from 'src/app/services/shops.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit, OnDestroy {

  shops: any;
  shopsSubscription!: Subscription;

  constructor(private shopService: ShopsService) { }

  ngOnInit(): void {
    this.shopsSubscription = this.shopService.shopsSubject
      .subscribe((shops: any) => {
        this.shops = shops
      });
    this.shopService.getShops();
  };

  ngOnDestroy(): void {
    this.shopsSubscription?.unsubscribe();
  };

}
