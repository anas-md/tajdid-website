import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  form: FormGroup = this.fb.group({
      from_name:'',
      to_name:'Admin',
      from_email:'',
      message:'',
  });

  constructor(private fb:FormBuilder){
    this.form = this.fb.group({
      name:['', Validators.required],
      email:['', [Validators.required,Validators.minLength(1),Validators.email]],
      message:['', Validators.required,]
    });
  }

  async send() {
    emailjs.init('4UlHEzYeS89g6NfR6');
    let response =  await emailjs.send("service_k2hzv5c","template_r27yyld",{
      from_name: this.form.value.from_name,
      to_name: this.form.value.from_name,
      from_email: this.form.value.from_email,
      message: this.form.value.message,
      });

      alert('Message has been sent');
      this.form.reset();
  }
}
