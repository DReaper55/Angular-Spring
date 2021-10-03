import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/employee-model';
import { EmployeeServiceService } from 'src/app/employee.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user : Person = new Person();
  id: string;

  constructor(private employeeService: EmployeeServiceService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    this.employeeService.getUserById(this.id).subscribe(user => {this.user = user})
  }


}
