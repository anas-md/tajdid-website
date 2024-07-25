import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormGroup,FormControl,FormBuilder,Validators,NgForm,NonNullableFormBuilder,NgModel,} from '@angular/forms';
import { addProduct } from '../../addProduct';
import { ApiService, ServiceResponse } from '../../api.service';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Note } from './note';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  // allProduct: Product[] = []

  oldUserObj: any;

  readonly APIurl = 'http://localhost:5000';

  constructor(private http: HttpClient, private apiservice: ApiService) {}

  notes: any;
  dtoptions:DataTables.Settings={};
  dtTrigger:Subject<any>=new Subject<any>();

  refreshNotes() {
    this.http.get(this.APIurl + '/userservices').subscribe((data) => {
      this.notes = data;
      this.dtTrigger.next(null);
    });
  }

  ngOnInit(): void {
    this.dtoptions = {
      pagingType: 'simple_numbers',
      search: true,
    };
    this.refreshNotes();

    this.http.get(this.APIurl + '/userservices').subscribe(data => {
    this.notes = data;
  setTimeout(()=>{   
    $('#datatableexample').DataTable( {
      pagingType: 'simple_numbers',
      pageLength: 5,
      processing: true,
      lengthMenu : [5, 10, 25]
  } );
  }, 1);
        }, error => console.error(error));

  }

  editData(userObj: any) {
    this.oldUserObj = JSON.stringify(userObj);
    this.notes.forEach((element: { isEdit: boolean }) => {
      element.isEdit = false;
    });
    userObj.isEdit = true;
    
  }

  updateRecord(note: Note) {

    const body = {
      name: note.name,
      services: note.services,
      description: note.description,
      mobile: note.mobile,
      email: note.email,
    }
    
    this.http.put(this.APIurl +'/userservices/update/' + note.id + '', body) .subscribe ((res:any) => {
      console.log();
    });
    this.refreshNotes();
    note.isEdit = true;
    location.reload();
    alert("Record has been updated")
  }

  cancel(obj: any) {
    const oldObj = JSON.parse(this.oldUserObj);
    obj.name = oldObj.name;
    obj.email = oldObj.email;
    obj.mobile = oldObj.mobile;
    obj.services = oldObj.services;
    obj.description = oldObj.description;
    obj.isEdit = false;
  }

  deleteData(id: any) {
    if (confirm('Are you sure you want to delete this')) {
      this.http
        .delete(this.APIurl + '/userservices/' + id + '')
        .subscribe((res: any) => {
          alert(res.message);
        });
      }
    this.refreshNotes();
    location.reload();
    alert("Record has been deleted successfully")
  }
}
