import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  brands: any;
  brand: any;

  brandsSubject = new Subject();
  brandSubject = new Subject();

  constructor(private http: HttpClient) { }

  getBrands(): void {
    this.http.get(`${environment.apiUrl}api/brand/`).subscribe(brandList => {
      this.brands = brandList;
      this.brandsSubject.next(this.brands);
    }, error => {
      console.log(error);
    });
  }
}
