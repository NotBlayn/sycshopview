import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit, OnDestroy {

  brands: any;
  brandsSubscription!: Subscription;

  constructor(private brandService: BrandsService) { }

  ngOnInit(): void {

    this.brandsSubscription = this.brandService.brandsSubject
      .subscribe((brands: any) => {
        this.brands = brands
      });
    this.brandService.getBrands();
  };

  ngOnDestroy(): void {
    this.brandsSubscription?.unsubscribe();
  };



}
