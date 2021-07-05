import { Component, Input, OnInit } from '@angular/core';
import { DepartmentsService } from 'src/app/services/departments.service';

@Component({
  selector: 'app-department-list-item',
  templateUrl: './department-list-item.component.html',
  styleUrls: ['./department-list-item.component.scss']
})
export class DepartmentListItemComponent implements OnInit {

  @Input() department!: any;

  constructor( private departmentService : DepartmentsService) { }

  ngOnInit(): void {
  }

}
