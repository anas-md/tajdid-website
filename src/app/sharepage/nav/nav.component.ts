import { Component, HostBinding, HostListener } from '@angular/core';
import { ApiService } from '../../api.service';
import { menu } from '../menu';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
 menus: any = [];
 userType: boolean = this.dataService.isAdmin() ;
 
 roles: string = '';

  menuVariable:boolean = false;
  menu_icon_variable:boolean = false;
  openMenu(){

    this.menuVariable = ! this.menuVariable;
    this.menu_icon_variable = ! this.menu_icon_variable;
  }

  adminmenu:boolean;
  usermenu:boolean;

  loginbtn:boolean;
  logoutbtn:boolean;
  constructor(private dataService: ApiService){
    dataService.getLoggedInName.subscribe(name => this.changeName(name));
    
    if(this.dataService.isLoggedIn())
    {
      this.loginbtn=false;
      this.logoutbtn=true

    }else
    {
      this.loginbtn=true;
      this.logoutbtn=false
    }

    // admin & user menu 
    if(localStorage.getItem('role') == 'admin')
    {
      // console.log(this.userType);
      this.adminmenu = true 
      this.usermenu = false

    }else if (localStorage.getItem('role') == 'user')
    {
      this.adminmenu = false 
      this.usermenu = true
    }else
    {
      this.adminmenu = false 
      this.usermenu = false
    }
    
    this.menus = menu.menus;
    const userData = localStorage.getItem('localUserData');
    if (userData != null && typeof userData === 'object') {
     const parseObj = JSON.parse(userData);
     this.roles =  parseObj.role;
    }
  }

  private changeName(name: boolean): void {
   this.logoutbtn = name;
     this.loginbtn = !name; 
     this.adminmenu = !name;
     this.usermenu = !name;
  }

    logout()
    {
      this.dataService.deleteToken();
      location.reload();
      window.location.href = window.location.href;
    }

    // services menu
    isAccordionOpen: boolean = true;
    id: any = '';
    accordion(ids: any) {
      console.log(ids);
      if (this.id == ids) {
        this.id = '';
      } else {
        this.id = ids;
      }
    }
}
  

