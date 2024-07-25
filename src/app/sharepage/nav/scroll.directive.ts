import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  constructor() { }

  @HostBinding('class.new-nav') newNav:boolean;
  @HostBinding('class.new-menu_icon') newIcon:boolean;
  @HostBinding('class.new-dropdown-content')newDropdown:boolean;

  @HostListener('window:scroll') onscroll(){
    console.log(window.scrollY);

    if(window.scrollY >= 30){
      this.newNav = true;
      this.newIcon = true;
      this.newDropdown = true;
    }else{
      this.newNav =false;
      this.newIcon = false;
      this.newDropdown = false;
    }
  }
}
