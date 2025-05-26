import {Client} from "../../models/Client.js";
export function initRegisterClient(){
    let btnSubmit=document.getElementById('submit');
    btnSubmit.addEventListener("click", (e)=>{
        e.preventDefault();
        let id=Date.now();
        let name=document.getElementById('name').value;
        let lastname=document.getElementById('lastName').value;
        let phone=document.getElementById('phone').value;
        let ci=document.getElementById('ci').value;
        let nit=document.getElementById('nit').value;
        let photo=document.getElementById('photo').value;
        let initDate=document.getElementById('initDate').value;
        let memberShip=document.getElementById('membership').value;
        let newClient= new Client(id,name, lastname, phone, ci, nit, photo, initDate, 0, memberShip);
        console.log(newClient);       
        let usersList= JSON.parse(localStorage.getItem("usersList")) || [];
        usersList.push(newClient);
        localStorage.setItem("usersList", JSON.stringify(usersList));
       

    })
    console.log(JSON.parse(localStorage.getItem("usersList")))   
}

initRegisterClient();

