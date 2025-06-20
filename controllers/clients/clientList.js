import { loadComponent } from "../../app/app.js";
export function initClientList() {
  let btnAddclient = document.querySelector(".add_client");
    

  btnAddclient.addEventListener("click", () => {
    window.history.pushState({}, "", "/registClient");
    loadComponent();
  });
  
  let searchBar=document.getElementById('searchbar');

  searchBar.addEventListener('keyup',()=>{
    let mainTrContainer=document.querySelectorAll('.data-row');
    const keyword=searchBar.value.toLowerCase().trim();
   
    for (let i = 0; i < mainTrContainer.length; i++) {
      const tdList=mainTrContainer[i].getElementsByTagName('td');
      let wordIsFound=false;
      for (let j = 0; j < tdList.length; j++) {
        let wordToCompare=tdList[j].textContent.toLowerCase().trim();
        if(wordToCompare.includes(keyword)){
          wordIsFound=true;
          break;
        }
      }
      mainTrContainer[i].style.display=wordIsFound ? '': 'none';
    }

  });



  let displayClients=()=>{
    let users=JSON.parse(localStorage.getItem('usersList'));
    let tbodyContainer=document.querySelector('.tbody_container');
   
    tbodyContainer.innerHTML="";

    for (let i = 0; i < users.length; i++) {
      let trContainer=document.createElement('tr');
      trContainer.classList.add('data-row');
      let tdName=document.createElement('td');
      tdName.classList.add("data-table");
      tdName.textContent=users[i].name;
      trContainer.appendChild(tdName);

      let tdLastName=document.createElement('td');
      tdLastName.classList.add("data-table");
      tdLastName.textContent=users[i].lastName;
      trContainer.appendChild(tdLastName);

      let tdInitDate=document.createElement('td');
      tdInitDate.classList.add("data-table");
      tdInitDate.textContent="fechaInici";
      trContainer.appendChild(tdInitDate);

      let tdExpireDate=document.createElement('td');
      tdExpireDate.classList.add("data-table");
      tdExpireDate.textContent="expira";

      trContainer.appendChild(tdExpireDate);
      let tdCi=document.createElement('td');
      tdCi.classList.add("data-table");
      tdCi.textContent=users[i].ci;
      trContainer.appendChild(tdCi);

      let tdMembership=document.createElement('td');
      tdMembership.classList.add("data-table");
      tdMembership.textContent=users[i].membership;
      trContainer.appendChild(tdMembership);

      let tdEmail=document.createElement('td');
      tdEmail.classList.add("data-table");
      tdEmail.textContent=users[i].email;
      trContainer.appendChild(tdEmail);

      let tdAction=document.createElement('td');
      tdAction.classList.add("actions");
      tdAction.innerHTML=displayButtonOption(users[i].id);
      trContainer.appendChild(tdAction);
      tbodyContainer.appendChild(trContainer);
    }
    const deleteClient=document.querySelectorAll('.delete_data');  
    deleteClient.forEach((btn)=>{
        btn.addEventListener("click", (e)=> {
          let id=e.currentTarget.dataset.index;
          deleteData(id);
        })
    });
  }
  
  
  
  let displayButtonOption=(id)=>{
    let buttons=`<button class='btn_action view_data' data-index='${id}'><i class="fas fa-eye ver-btn" title="Ver"></i></button>
                 <button class='btn_action edit_data' data-index='${id}'><i class="fas fa-pen editar-btn" title="Editar"></i></button>
                 <button class='btn_action delete_data' data-index='${id}' ><i class="fas fa-trash borrar-btn" title="Borrar"></i></button>`
    return buttons;
  }

  displayClients();



   
  let deleteData=(id)=>{
    
    if(id!==null){
      let usersLocal=JSON.parse(localStorage.getItem("usersList")) || [];
      let users=usersLocal.filter(user=>user.id!==parseInt(id));
      localStorage.setItem("usersList", JSON.stringify(users));
      displayClients();
    }else{
      console.log("error con la posicion del elemento" + pos);
    }
    
  }
  
  
}
