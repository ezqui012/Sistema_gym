export class Client {

    constructor (id, name, lastName, phone, ci, nit, photo, initDate, endDate, membership){
        this.id=id;
        this.name=name;
        this.lastName=lastName;
        this.phone=phone;
        this.ci=ci;
        this.nit=nit;
        this.photo=photo
        this.initDate=initDate;
        this.endDate=endDate;
        this.membership=membership;
    }
    getId(){
        return this.id;
    }
    getFullName(){
        return `${this.name} ${this.lastName}`;
    }
    getPhone(){
        return this.phone;
    }
    getCi(){
        return this.ci;
    }
    getNit(){
        return this.nit;
    }
    getInitDate(){
        return this.initDate;
    }
    getEndDate(){
        return this.endDate;
    }    
    getMembership(){
        return this.membership;
    }
    //setters
    setId(value){
        this.id=value;
    }
    setFullName(name){
        [this.name, this.lastName]= name.split(" ");
    }
    setPhone(value){
        this.phone=value;
    }
    setCi(value){
        this.ci=value;
    }
    setNit(value){
        this.nit=value;
    }
    setInitDate(value){
         this.initDate=value;
    }
    setEndDate(value){
         this.endDate=value;
    }    
    setMembership(value){
         this.membership=value;
    }

}