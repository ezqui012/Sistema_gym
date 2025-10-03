export function initEditMembership(){
    
    
    
    const urlParams = new URLSearchParams(window.location.search);
    const membershipId= parseInt(urlParams.get('id'));

    const getClientList=()=>{
        const clientList=JSON.parse(localStorage.getItem('usersList'))||[];
        return clientList;
    }
    
    const getMembershipData=()=>{
        const membershipList = JSON.parse(localStorage.getItem('membershipList'))||[];
        const membershipData = membershipList.find(membership => membership._idMembership===membershipId);
        return membershipData;
    }
    
    const loadClientList=()=>{
        const clients=getClientList();
        const clientIdMembership=parseInt(getMembershipData()._idClient);
        const clientSelect=document.getElementById('client');
        clientSelect.innerHTML='';
        for (let i = 0; i < clients.length; i++) {
            const clientOpt=document.createElement('OPTION');
            clientOpt.innerHTML=`${clients[i].name} ${clients[i].lastName}`;
            clientOpt.classList.add('opt-client');
            clientOpt.setAttribute('value', clients[i].id);
            
            if(clientIdMembership===clients[i].id){
                clientOpt.selected=true;
                clientSelect.append(clientOpt);    
            }else{
                clientSelect.append(clientOpt);
            }
        }
    }
    


    const loadMembershipTypeList=()=>{
        const selectMembershipType = document.getElementById('membershipType');
        const membershipTypeList = JSON.parse(localStorage.getItem('membershipTypeList'))||[];
        const membershipTypeId=getMembershipData();
        for (let i = 0; i < membershipTypeList.length; i++) {
            const membershipTypOpt=document.createElement('OPTION');
            membershipTypOpt.classList.add('opt-memberType');
            membershipTypOpt.setAttribute('id', membershipTypeList[i].id);
            membershipTypOpt.setAttribute('value', membershipTypeList[i]._membershipName);
            membershipTypOpt.innerHTML=membershipTypeList[i]._membershipName;
            if(membershipTypeId._idMembershipType===membershipTypeList[i]._membershipName){
                membershipTypOpt.selected=true;
                selectMembershipType.append(membershipTypOpt);
            }else{
                selectMembershipType.append(membershipTypOpt);
            }
        }
    }

    const loadMembershipDate=()=>{
        const membershipData=getMembershipData();
        const initDate = document.getElementById('dateClientEntry');
        initDate.value=membershipData._initDate;
    }
    loadMembershipDate();
    loadClientList();
    loadMembershipTypeList();
    

}

initEditMembership();