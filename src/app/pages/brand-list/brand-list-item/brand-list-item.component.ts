import { Component, Input, OnInit } from '@angular/core';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-brand-list-item',
  templateUrl: './brand-list-item.component.html',
  styleUrls: ['./brand-list-item.component.scss']
})
export class BrandListItemComponent implements OnInit {

  @Input() brand!: any;

  constructor(private brandService: BrandsService) { }

  ngOnInit(): void {
  }

}
