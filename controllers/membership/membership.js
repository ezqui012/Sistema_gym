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
      newOption.setAttribute('id', membershipTypeList[i].id);
      newOption.setAttribute('value', `${membershipTypeList[i]._membershipName}`)
      newOption.text = `${membershipTypeList[i]._membershipName}`;
      selectMembershipType.appendChild(newOption);
    }
  }


  const selectedMembershipData=(id)=>{
    const membershipList=getMembershipTypeList();
    let membershipSelected=null;
    if(membershipList){
      membershipSelected=membershipList.find(memebership =>memebership.id===id);
    }

    return membershipSelected;
  }


  const validateDate = () => {
    let newDate = '';
    let actualDay = new Date().getDate();
    let actualMonth = new Date().getMonth() + 1;
    const actualYear = new Date().getFullYear();
    if(actualMonth<10){
      actualMonth = '0' + actualMonth;
    }
    if(actualDay<10){
      actualDay = '0' + actualDay;
    }
    newDate=`${actualYear}-${actualMonth}-${actualDay}`
    selectClientEntry.setAttribute("min", newDate);
  };
  

  const parseInputDate=(inputValue)=>{
    if(!inputValue)return null;
 
    const [year,month,day]=inputValue.split('-');
    return new Date (year,month-1,day);
  }

  const formatDate=(date)=>{
    let formatedDate='';
    let day = date.getDate();
    let month = date.getMonth()+1;
    const year = date.getFullYear();
    if(day<10){
      day='0' + day;
    }
    if(month<10){
      month='0' + month;
    }
    return formatedDate=`${day}/${month}/${year}`;
  }

  const addDays=(initDate, days)=>{
    const finalDate=parseInputDate(initDate);
    finalDate.setDate(finalDate.getDate()+days);   
    return formatDate(finalDate);
  }

  const displayDateData=(initDate, durationDays)=>{
    const getFinalDate=addDays(initDate, durationDays);
    const pInitDate = document.querySelector('.initDate_data');
    const pEndDate = document.querySelector('.endDate_data');
    
    const initialDate= parseInputDate(initDate);
    const initialDateFormated = formatDate(initialDate);
    pInitDate.innerHTML=`<strong class="desc_membership_data">Fecha Inicio:</strong>${initialDateFormated}`;
    pEndDate.innerHTML=`<strong class="desc_membership_data">Fecha Fin:</strong>${getFinalDate}`;
  }
  
  const displayMembershipData=()=>{
    const optionSelected=selectMem.options[selectMem.selectedIndex];
    const optionId=optionSelected.id;
    const pPrice = document.querySelector(".price_data");
    const pDuration = document.querySelector(".duration_data");    
    const memberShiptTypeList = getMembershipTypeList();
    const data = memberShiptTypeList.find(membership=>membership.id===parseInt(optionId));
    pPrice.innerHTML = `<strong class="desc_membership_data">Precio:</strong>${data._price} bs`;
    pDuration.innerHTML = `<strong class="desc_membership_data">Duracion:</strong>${data._duration} dias`;
  }


  selectClientEntry.addEventListener('change',(e)=>{
    e.preventDefault();
    const optionSelected=selectMem.options[selectMem.selectedIndex];
    const optionId=parseInt(optionSelected.id);
    const membership=selectedMembershipData(optionId);
    console.log(parseInt(membership._duration));
    const entryDate=selectClientEntry.value;
    
    displayDateData(entryDate,parseInt(membership._duration));
   
  })
  
  selectMem.addEventListener("change", (e) => {
    e.preventDefault();
    displayMembershipData();
  });


  validateDate();
  loadMembershipTypeList();
  loadClientList();
  console.log(selectMem.firstChild)
}
initMembership();
