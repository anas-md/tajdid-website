import { Component, HostBinding, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hompage',
  templateUrl: './hompage.component.html',
  styleUrls: ['./hompage.component.css'],
})
export class HompageComponent {
  constructor(private http: HttpClient) {}

  ngOnInit() {}
}
