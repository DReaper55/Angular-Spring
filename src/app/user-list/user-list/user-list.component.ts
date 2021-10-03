import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Person } from 'src/app/employee-model';
import { EmployeeServiceService } from 'src/app/employee.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users : Array<Person>;
  dataSource : Person[];

  constructor(private employeeService: EmployeeServiceService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  displayedColumns: string[] = ['id', 'username', 'email', 'password', 'actions'];

  reloadData(){
    this.employeeService.getAllUsers().subscribe(data => {
      this.users = data;
      this.dataSource = this.users;
      console.log(this.dataSource[0]);
    },
      error => console.error(error)
    );
  }

  showDetails(id: string){
    this.router.navigate(['details', id]);
  }

  updateDetails(id: string){
    this.router.navigate(['/update', id])
  }

  deleteUser(id: string){
    this.employeeService.deleteUser(id).subscribe(data => this.reloadData())
  }

}
