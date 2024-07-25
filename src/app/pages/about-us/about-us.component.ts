import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent {
  constructor(private http: HttpClient) {}

  ngOnInit() {}
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
