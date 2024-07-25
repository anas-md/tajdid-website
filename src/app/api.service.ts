import { Injectable,Output,EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators'; 
import { HttpClient,HttpParams } from '@angular/common/http';
import { Users } from './users';
import { addProduct } from './addProduct';
import { BehaviorSubject } from 'rxjs';


export interface ServiceResponse{
  id:number
  name:string
  email: string
  services:string
  description:string
  mobile:string
  usertype:string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  tokenValue:string = 'ADMIN';
  userData: object | undefined;

  redirectUrl!:string;
    baseUrl:string ="http://localhost:8080/tajdid%20website%20-%20Copy/php/" ;
    readonly APIurl = 'http://localhost:5000';
  
    @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

    constructor(private httpClient : HttpClient,  ) { }
   
    //user registration
  public userregistration(
    name:any, 
    email:any, 
    password:any, 
    mobile:any,
    ){
    return this.httpClient.post<any>(this.APIurl + '/register',
    {
       name,email,password,mobile
    })

    .pipe(map(Users => {
      return Users;
    }));
  }

  //subscription form
  public addproduct(
    name:any, 
    email:any, 
    services:any,
    description:any, 
    mobile:any
    ){
    return this.httpClient.post<any>(this.APIurl + '/userservices',
    {
      name,email,services,description,mobile
    })

    .pipe(map(addProduct => {
      return addProduct;
    }));
  }
  
  // user
  public userlogin(email:any, password:any){
    // alert(email)
    return this.httpClient.post<any>(this.APIurl + '/signIn', {email, password})
    .pipe(map(Users => {
      this.userData = Users;
      console.log(Users);
      if (Users.message != 'failed') {
        this.setToken(Users.usertype);
        this.tokenValue = (Users.usertype);
        localStorage.setItem('role', Users.usertype);
        
        this.getLoggedInName.emit(true);
        
      } else {
        this.setToken('failed')
      }   
      return Users;
    }));  
  }


  setToken(token: string){
    localStorage.setItem('token', token);
  }

  getToken(){
    return localStorage.getItem('token');
  }
  deleteToken(){
    localStorage.removeItem('token');
    localStorage.removeItem('role');

  }

  isLoggedIn(){
    const usertoken = this.getToken();

    console.log(usertoken);
    if (usertoken !== null && usertoken != 'failed'){
      return true
    }
      return false;
  }

  isAdmin(){
    const userType= this.getUserType();

    console.log(userType);
    if (userType !== null && userType == 'admin'){
      return true

    }
      return false;
  }

  getUserType() {
    return localStorage.getItem('role')
  }
}
