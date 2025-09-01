import { loadComponent } from "../../app/app.js";
//import { membership } from "../../models/Membership.js";
export function initMembership() {
  const selectMem = document.getElementById("membershipType");
  const selectClientEntry = document.getElementById("dateClientEntry");
  function getClientList() {
    const clientList = JSON.parse(localStorage.getItem("usersList"));
    return clientList;
  }

  function getMembershipTypeList() {
    const membershiptTypeList = JSON.parse(
      localStorage.getItem("membershipList")
    );
    return membershiptTypeList;
  }

  function loadClientList() {
    const selectClient = document.getElementById("client");
    selectClient.innerHTML = "";
    const clients = getClientList();
    for (let i = 0; i < clients.length; i++) {
      const newOption = document.createElement("option");
      newOption.classList.add("opt-client");
      newOption.value = clients[i].id;
      newOption.text = `${clients[i].name} ${clients[i].lastName}`;
      selectClient.append(newOption);
    }
  }
  function loadMembershipTypeList() {
    const selectMembershipType = document.getElementById("membershipType");
    selectMembershipType.innerHTML = "";
    const membershipTypeList = getMembershipTypeList();
    for (let i = 0; i < membershipTypeList.length; i++) {
      const newOption = document.createElement("option");
      newOption.classList.add("opt-memberType");
      newOption.value = membershipTypeList[i].id;
      newOption.text = `${membershipTypeList[i]._membershipName}`;
      selectMembershipType.append(newOption);
    }
  }
  function loadMembershipTypeData() {}


  const validateDate = () => {
    let newDate = [];
    const actualDay = new Date().getDate();
    const actualMonth = new Date().getMonth() + 1;
    const actualYear = new Date().getFullYear();
    if(actualMonth<10){
      newDate[1] = '0' + actualMonth;
    }else{
      newDate[1] = actualMonth
    }
    if(actualDay<10){
      newDate[2] = '0' + actualDay;
    }else{
      newDate[2] = actualDay;
    }
    newDate[0] = actualYear;
    let newDateConverted = newDate.toString();
    newDateConverted = newDateConverted.replaceAll(",", "-");
    selectClientEntry.setAttribute("min", newDateConverted);
  };
  

  const parseInputDate=(inputValue)=>{
    if(!inputValue)return null;
 
    const [year,month,day]=inputValue.split('-');
    console.log(day);
    return new Date (year,month,day);
  }

  const addDays=(initDate, days)=>{
    const finalDate=parseInputDate(initDate);
    let formatedDate=[];
    finalDate.setDate(finalDate.getDate()+days);
    formatedDate[0]=finalDate.getDate();
    formatedDate[1]=finalDate.getMonth();
    formatedDate[2]=finalDate.getFullYear();
    formatedDate=formatedDate.join('/');  
    return formatedDate;
  }

  const displayDateData=(initDate, durationDays)=>{
    const getFinalDate=addDays(initDate, durationDays);
    const pInitDate = document.querySelector('.initDate_data');
    const pEndDate = document.querySelector('.endDate_data');
    const initialDate= initDate.replaceAll('-','/'); 
    pInitDate.innerHTML=`<strong class="desc_membership_data">Fecha Inicio:</strong>${initialDate}`;
    pEndDate.innerHTML=`<strong class="desc_membership_data">Fecha Fin:</strong>${getFinalDate}`;
  }
  
  selectClientEntry.addEventListener('change',(e)=>{
    e.preventDefault();

    const membershipDuration=30;
    const entryDate=selectClientEntry.value;
    
    displayDateData(entryDate,10);
   
  })
  
  selectMem.addEventListener("change", (e) => {
    e.preventDefault();
    const pPrice = document.querySelector(".price_data");
    const pDuration = document.querySelector(".duration_data");
    const memberShiptTypeList = getMembershipTypeList();
    const data = memberShiptTypeList.find(
      (membership) => parseInt(selectMem.value) === membership.id
    );
    pPrice.innerHTML = `<strong class="desc_membership_data">Precio:</strong>${data._price} bs`;
    pDuration.innerHTML = `<strong class="desc_membership_data">Duracion:</strong>${data._duration} dias`;
  });
  validateDate();
  loadMembershipTypeList();
  loadClientList();
}
initMembership();
