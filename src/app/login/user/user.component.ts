import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  menus: any = [];
  menuVariable:boolean = false;
  menu_icon_variable:boolean = false;
  openMenu(){

    this.menuVariable = ! this.menuVariable;
    this.menu_icon_variable = ! this.menu_icon_variable;
  }

  auth:any;
  constructor(private router:Router){ }

  ngOnInit(): void{
    this.auth = localStorage.getItem('token');

    if(!this.auth){
      this.router.navigate(['/login']);
    }
  }
}
