import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DepartmentsService } from 'src/app/services/departments.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

  departments: any;
  departmentsSubscription!: Subscription;

  constructor(private departmentService: DepartmentsService) { }

  ngOnInit(): void {
    this.departmentsSubscription = this.departmentService.departmentsSubject
      .subscribe((departments: any) => {
      this.departments = departments
    });
  this.departmentService.getDepartments();
  };

  ngOnDestroy(): void {
    this.departmentsSubscription?.unsubscribe();
  };
}
