import { sidebar } from "../components/sidebar.js";



document.addEventListener("DOMContentLoaded",()=>{
    let sidebarComponent=document.getElementById('sidebar_component');
    if(sidebarComponent){
        sidebarComponent.innerHTML=sidebar();
    }
    // let res=null;
    //  let elementos=[...sidebarComponent.children]
    // elementos.map(element=>{
    //     res=element.children;
    // })
    setTimeout(() => {
        const botones = sidebarComponent.querySelectorAll('.btn');
        botones.forEach(btn => {
            const ruta = btn.dataset.route;
            console.log(ruta)
            if (ruta) {
                btn.addEventListener('click', () => {
                    window.location.href = ruta;
                });
            }
        });
    }, 0);
})


let btnAddclient=document.querySelector(".add_client");

btnAddclient.addEventListener("click",()=>{
    window.location.href="registClient.html";
});


