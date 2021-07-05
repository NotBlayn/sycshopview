import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private http: HttpClient) { }

  departments: any;
  department: any;

  departmentsSubject = new Subject();
  departmentSubject = new Subject();

  getDepartments(): void {
    this.http.get(`${environment.apiUrl}api/department/`).subscribe(departmentList => {
      this.departments = departmentList;
      this.departmentsSubject.next(this.departments);
    }, error => {
      console.log(error);
    });
  }
}
