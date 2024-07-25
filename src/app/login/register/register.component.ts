import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators,NgForm, NonNullableFormBuilder,} from '@angular/forms';
import { first } from 'rxjs/operators'; 
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  angForm: FormGroup;

  constructor( 
  private fb: FormBuilder, 
  private dataService: ApiService, 
  private router:Router 
  ) { 
    this.angForm = this.fb.group({
      name:  ['',Validators.required],
      email: ['', [Validators.required, Validators.minLength(4), Validators.email]],
      password: ['', Validators.required],
      mobile:  ['', Validators.required ]
    });
  }

  postdata(angForm:any)
  {
    this.dataService.userregistration(
      angForm.value.name,
      angForm.value.email,
      angForm.value.password,
      angForm.value.mobile
    )
    .pipe(first())
    .subscribe(
      data => {
        console.log(data);
        if(data.message =='success'){
        alert("Congratulations, your account has been successfully created")
        this.router.navigate(['login']);
        }else {
          alert("Something went wrong here")
        }
    },
    error => {
      alert("Something went wrong");
      console.error(error);
    });
  }
}
