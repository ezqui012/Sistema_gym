import { sidebar } from "../components/sidebar.js";

document.addEventListener('DOMContentLoaded',()=>{
  const sidebarComponent=document.getElementById('sidebar_component');
    if(sidebarComponent){
      sidebarComponent.innerHTML=sidebar();
    }
})

