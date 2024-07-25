export class addProduct {

    public Id: number;
    public name: string;
    public email:string;
    public services:string;
    public description:string;
    public mobile:string;
    
    
    constructor(
        Id:number,
        name: string,
        email:string,
        services:string,
        description: string,
        mobile:string,
    ){
    this.Id = Id;
    this.name = name;
    this.email = email;
    this.services = services;
    this.description = description;
    this.mobile = mobile;
    }
}