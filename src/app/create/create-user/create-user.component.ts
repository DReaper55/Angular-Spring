import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from 'src/app/employee-model';
import { EmployeeServiceService } from 'src/app/employee.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  user : Person = new Person();

  constructor(private employeeService: EmployeeServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.user = this.userForm.getRawValue();

    this.employeeService.addUser(this.user).subscribe(data => {
      this.user = new Person();
      this.router.navigate(['/users']);
    });
  }

  userForm = new FormGroup({
    username : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, this.shortPWord]),
  })

  shortPWord(control: FormControl){
    const pass: string = control.value;

    return pass.length < 6
    ? {shortPWord: true}
    : null
  }

  get username(){
    return this.userForm.get('username');
  }

  get email(){
    return this.userForm.get('email');
  }

  get password(){
    return this.userForm.get('password');
  }
}
