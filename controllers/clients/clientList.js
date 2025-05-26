import {loadComponent} from "../../app/app.js"
export function initClientList(){
let btnAddclient=document.querySelector(".add_client");

btnAddclient.addEventListener("click",()=>{
    console.log("cliceado");
    window.history.pushState({},"","/registClient");
    loadComponent();

});

}



