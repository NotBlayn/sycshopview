import { Component, Input, OnInit } from '@angular/core';
import { ShopsService } from 'src/app/services/shops.service';

@Component({
  selector: 'app-shop-list-item',
  templateUrl: './shop-list-item.component.html',
  styleUrls: ['./shop-list-item.component.scss']
})
export class ShopListItemComponent implements OnInit {

  @Input() shop!: any;

  constructor(private shopService: ShopsService) { }

  ngOnInit(): void {
  }

}
