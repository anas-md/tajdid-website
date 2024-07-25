import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appScroll2]'
})
export class ScrollDirective {

  constructor() { }

  @HostBinding('class.new-acts') newActs:boolean;

  @HostListener('window:scroll') onscroll(){
    console.log(window.scrollY);

    if(window.scrollY >= 50){
      this.newActs = true;
    }else{
      this.newActs =false;
    }
  }
}

