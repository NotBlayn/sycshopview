import { Component, Input, OnInit } from '@angular/core';
import { ProductStockService } from 'src/app/services/product-stock.service';

@Component({
  selector: 'app-product-stock-list-item',
  templateUrl: './product-stock-list-item.component.html',
  styleUrls: ['./product-stock-list-item.component.scss']
})
export class ProductStockListItemComponent implements OnInit {

  @Input() productStock!: any;

  constructor(private productStockService: ProductStockService) { }

  ngOnInit(): void {
  }

}
