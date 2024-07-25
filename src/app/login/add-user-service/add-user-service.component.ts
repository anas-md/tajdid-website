import { Component } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators,NgForm,NonNullableFormBuilder,} from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-user-service',
  templateUrl: './add-user-service.component.html',
  styleUrls: ['./add-user-service.component.css'],
})
export class AddUserServiceComponent {
  angForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dataService: ApiService,
    private router: Router,
    private location: Location
  ) {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      email: ['',[Validators.required, Validators.minLength(4), Validators.email]],
      service: ['', Validators.required],
      description: ['', Validators.required],
      mobile: ['', Validators.required],
    });
  }

  postdata(angForm: any) {
    this.dataService
      .addproduct(
        angForm.value.name,
        angForm.value.email,
        angForm.value.service,
        angForm.value.description,
        angForm.value.mobile
      )
      .pipe(first())
      .subscribe(
        data => {
          if (data.message == 'success') {
            location.reload();
            alert('Form has been submited');   
          } else {
            alert('Something went wrong');
          }
        },
        (error) => {
          alert('Something went wrong');
        }
      );
  }
}
