import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/employee-model';
import { EmployeeServiceService } from 'src/app/employee.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  user: Person = new Person();
  id: string;

  constructor(private employeeService: EmployeeServiceService, private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    this.employeeService.getUserById(this.id).subscribe(user => this.user = user);
    this.user = new Person();
  }

  onSubmit(){
    this.employeeService.updateUser(this.id, this.user).subscribe(data => {
      this.user = new Person();
      this.router.navigate(['/users']);
    },

    error => console.error(error))
  }

}
