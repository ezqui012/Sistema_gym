import { Client } from "../../models/Client.js";
export function initRegisterClient() {
  const btnSubmit = document.getElementById("submits");
  
  const btnSubmitModal= document.getElementById('modal_submit');
  const btnCloseModal= document.getElementById('close_modal');
  const allInput= document.querySelectorAll('.field_data');
  btnSubmitModal.replaceWith(btnSubmitModal.cloneNode(true));
  const newBtnSubmitModal = document.getElementById('modal_submit');

  btnCloseModal.addEventListener("click", (e)=>{
    e.preventDefault();
    const alertDialog= document.getElementById('alert-dialog');
    alertDialog.close();
  })

  btnSubmit.addEventListener("click",(e)=>{
    e.preventDefault();
    const alertDialog= document.getElementById('alert-dialog');
    console.log("llega");
    let checkForm=true;
    let checks=[];
    allInput.forEach((oneInput,i)=>{
        
        const isValid=validateField(oneInput,oneInput.id);
        if(!isValid){
          checks.push(false);
        }else checks.push(true);
    });
    checkForm=checks.every(check=>check===true);
    if(checkForm){
      alertDialog.dataset.checkForm=checkForm;
      alertDialog.show();
    }
  })


  newBtnSubmitModal.addEventListener("click", (e) => {
    e.preventDefault();
    submitData();
  });


  function submitData(){
    const alertDialog= document.getElementById('alert-dialog');
    let checkForm=alertDialog.dataset.checkForm;
    if(checkForm){
      btnSubmitModal.disabled=true; 
      let idClient = Date.now();
      let name = document.getElementById("name").value;
      let lastname = document.getElementById("lastName").value;
      let phone = document.getElementById("phone").value;
      let ci = document.getElementById("ci").value;
      let nit = document.getElementById("nit").value;
      let photo = document.getElementById("photo").value;
      let email = document.getElementById("email").value;
      let memberShip = document.getElementById("membership").value;
      let newClient = new Client(idClient, name, lastname, phone, ci, nit, photo, email,0, 0, memberShip);
      let usersList= JSON.parse(localStorage.getItem("usersList")) || [];
      usersList.push(newClient);
      localStorage.setItem("usersList", JSON.stringify(usersList));
      console.log("Usuario registrado con exito");
      
      alertDialog.close();

    }else console.log("Formulario invalido")
  }

  const validateField = (field, id) => {
    let isValid=false;
    const inputError = document.getElementById(`${id}_error`);
    let clearField = field.value.trim();
    if (id === "name") {
      if (clearField && clearField.length >= 4 && clearField.length <= 18) {
        field.classList.add("valid");
        field.classList.remove("error");
        inputError.classList.remove("show");
        isValid=true;
      } else if (clearField === "") {
        field.classList.add("error");
        field.classList.remove("valid");
        inputError.classList.add("show");
        inputError.textContent = "El campo se encuentra vacío";
        isValid=false;
      } else {
        field.classList.add("error");
        field.classList.remove("valid");
        inputError.classList.add("show");
        inputError.textContent =
          "El campo debe tener mas de 4 y menos de 18 palabras";
          isValid=false;
      }
    }
    if (id === "lastName") {
      if (clearField && clearField.length >= 4 && clearField.length <= 18) {
        field.classList.add("valid");
        field.classList.remove("error");
        inputError.classList.remove("show");
        isValid=true;
      } else if (clearField === "") {
        field.classList.add("error");
        field.classList.remove("valid");
        inputError.classList.add("show");
        inputError.textContent = "El campo se encuentra vacío";
        isValid=false;
      } else {
        field.classList.add("error");
        field.classList.remove("valid");
        inputError.classList.add("show");
        inputError.textContent = "El campo debe tener mas de 4 y menos de 18 palabras";
        isValid=false;
      }
    }
    if (id === "phone") {
      if (clearField && clearField.length >= 7 && clearField.length <= 18) {
        field.classList.add("valid");
        field.classList.remove("error");
        inputError.classList.remove("show");
        isValid=true;
      } else if (clearField === "") {
        field.classList.add("error");
        field.classList.remove("valid");
        inputError.classList.add("show");
        inputError.textContent = "El campo se encuentra vacío";
        isValid=false;
      } else {
        field.classList.add("error");
        field.classList.remove("valid");
        inputError.classList.add("show");
        inputError.textContent = "El campo debe tener mas de 7 dígitos y menos de 10 dígitos";
        isValid=false;
      }
    }
    if (id === "ci") {
      if (clearField && clearField.length >= 7 && clearField.length <= 12) {
        field.classList.add("valid");
        field.classList.remove("error");
        inputError.classList.remove("show");
        isValid=true;
      } else if (clearField === "") {
        field.classList.add("error");
        field.classList.remove("valid");
        inputError.classList.add("show");
        inputError.textContent = "El campo se encuentra vacío";
        isValid=false;
      } else {
        field.classList.add("error");
        field.classList.remove("valid");
        inputError.classList.add("show");
        inputError.textContent = "El campo debe tener mas de 7 dígitos y menos de 12 dígitos";
        isValid=false;
      }
    }
    if (id === "nit") {
      if (clearField && clearField.length >= 1 && clearField.length <= 10) {
        field.classList.add("valid");
        field.classList.remove("error");
        inputError.classList.remove("show");
        isValid=true;
      } else if (clearField === "") {
        field.classList.add("error");
        field.classList.remove("valid");
        inputError.classList.add("show");
        inputError.textContent = "El campo se encuentra vacío";
        isValid=false;
      } else {
        field.classList.add("error");
        field.classList.remove("valid");
        inputError.classList.add("show");
        inputError.textContent =
          "El campo debe tener mas de 1 dígitos y menos de 10 dígitos";
        isValid=false;
      }
    }
    if (id === "photo") {
      if (clearField) {
        field.classList.add("valid");
        field.classList.remove("error");
        inputError.classList.remove("show");
        isValid=true;
      } else if (clearField === "") {
        field.classList.add("error");
        field.classList.remove("valid");
        inputError.classList.add("show");
        inputError.textContent = "Debe ingresar una foto de perfil";
        isValid=false;
      } else {
        field.classList.add("error");
        field.classList.remove("valid");
        inputError.classList.add("show");
        isValid=false;
      }
    }
    if (id && id === "membership") {
      if (clearField !== "mem0") {
        field.classList.add("valid");
        field.classList.remove("error");
        inputError.classList.remove("show");
        isValid=true;
      } else {
        field.classList.add("error");
        field.classList.remove("valid");
        inputError.classList.add("show");
        inputError.textContent = "Elija una opción";
        isValid=false;
      }
    }
    if (id === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (clearField && emailRegex.test(clearField)) {
        field.classList.add("valid");
        field.classList.remove("error");
        inputError.classList.remove("show");
        isValid=true;
      } else if (clearField === "") {
        field.classList.add("error");
        field.classList.remove("valid");
        inputError.classList.add("show");
        inputError.textContent = "Debe ingresar un correo vàlido";
        isValid=false;
      } else {
        field.classList.add("error");
        field.classList.remove("valid");
        inputError.classList.add("show");
        inputError.textContent = "Debe ingresar un correo vàlido";
        isValid=false;
      }
    }
     return isValid;
  };

  // let validateDate=()=>{

  //   let newDate=[];
  //   let actualDay=new Date().getDate();
  //   let actualMonth=new Date().getMonth()+1;
  //   let actualYear=new Date().getFullYear();
  //   let actualTime= new Date().getTime();
  //   newDate[0]=actualYear;
  //   newDate[1]=actualMonth;
  //   newDate[2]=actualDay;
  //   let res=newDate.toString();
  //   res=res.replaceAll(",","-");
  //   let newFecha=new Date(res);
  //   console.log(actualTime)
  //   console.log(res);
  // }
  // validateDate();
}

initRegisterClient();
