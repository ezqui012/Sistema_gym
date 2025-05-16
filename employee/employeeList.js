import { sidebar } from "../components/sidebar.js";

let sidebarComponent=document.getElementById('sidebar_component');


addEventListener("DOMContentLoaded",(e)=>{
    if(sidebarComponent){
        sidebarComponent.innerHTML=sidebar();
    }
    setTimeout(() => {
        const botones = sidebarComponent.querySelectorAll('.btn');
        botones.forEach(btn => {
            const ruta = btn.dataset.route;
           // console.log(ruta)
            if (ruta) {
                if(ruta)
                btn.addEventListener('click', () => {
                    window.location.href = ruta;
                });
            }
        });
    }, 0);
})
//const {location: { pathname = '/' }}=window;

console.log(history.pushState(3,'Estes','employee/employeeList'))

// let loadComponent=(elementContainer,component)=>{
//     if(elementContainer){
//         elementContainer.innerHTML=component;        
//     }
//     return elementContainer;
// }