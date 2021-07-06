import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {

  shops: any;
  shopsSubject = new Subject();

  constructor(private http: HttpClient) { }

  getShops(): void {
    this.http.get(`${environment.apiUrl}api/shop/`).subscribe(shopList => {
      this.shops = shopList;
      this.shopsSubject.next(this.shops);
    }, error => {
      console.log(error);
    });
  }
}
