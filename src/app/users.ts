export class Users {

    public Id: number;
    public name: string;
    public email:string;
    public password:string;
    public mobile:string;
    public usertype:string;
    
    
    constructor(
        Id:number,
        name: string,
        email:string,
        password:string,
        mobile:string,
        usertype: string){
    
    this.Id = Id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.mobile = mobile;
    this.usertype = usertype;
    }
}