import {loadComponent} from "../../app/app.js";

export function initEmployeeList(){
    
    let btnAddEmp= document.querySelector('.add_employee');

    
        btnAddEmp.addEventListener("click", ()=>{
            window.history.pushState({},"","/registEmployee");
            loadComponent();
        });
    


}
