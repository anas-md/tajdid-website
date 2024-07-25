import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
angForm:FormGroup;
adminForm:FormGroup
constructor(
  private fb: FormBuilder,private dataService: ApiService, private router:Router
) {
  this.angForm = this.fb.group({
    email:['', [Validators.required,Validators.minLength(1),Validators.email]],
    password:['', Validators.required,]
  });
  this.adminForm = this.fb.group({
    email:['', [Validators.required,Validators.minLength(1),Validators.email]],
    password:['', Validators.required,]
  });
}
  postdata(angForm:any){
    if (this.angForm.valid){
      this.dataService.userlogin(
        angForm.value.email,
        angForm.value.password,
        )
      .pipe(first())
      .subscribe(
        data => {
          localStorage.setItem('localUserData',JSON.stringify(data[0]))
          console.log(data[0]);
          if(data[0].usertype == 'admin' ){
            localStorage.setItem('role','admin')
            // this.router.navigateByUrl('/admin');
            location.replace('/admin');

          }else if (data[0].usertype == 'user'){
            localStorage.setItem('role','user')
            location.replace('/user');

          }else {
            alert("User email or password is incorrect")
          }
        },  
        error => {
          alert("User email or password is incorrect")
        }
      )
    }     
  }
}
