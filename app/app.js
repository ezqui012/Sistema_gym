import { sidebar } from "../components/sidebar.js";


let sidebarComponent = document.getElementById("sidebar_component");

addEventListener("DOMContentLoaded", () => {
  renderComponent(sidebarComponent, sidebar());

  const sideB = sidebarComponent.children[0];
  const btns = sideB.querySelectorAll(".btn");
  btns.forEach((sidebarBtn) => {
    sidebarBtn.addEventListener("click", (e) => {
      e.preventDefault();
      let route = sidebarBtn.dataset.route;
      window.history.pushState({}, "", route);
      loadComponent();
    });
  });
});

const routes = {
  404: "pages/404",
  "/app": "/app/app.html",
  "/registEmployee": "../views/employee/registEmployee.html",
  "/registClient": "../views/clients/registClient.html",
  "/employeeList": "../views/employee/employeeList.html",
  "/clientList": "../views/clients/clientList.html",
  "/report": "/reports/report1.html",
};

const loadComponent = async () => {
  const path = window.location.pathname;
  const newRoute = routes[path] || routes["/app"] || routes["/404"];
  const html = await fetch(newRoute).then((data) => data.text());

  document.getElementById("main_content").innerHTML = html;
  initView(path);
};



window.addEventListener("DOMContentLoaded", () => {
  loadComponent();
});
window.addEventListener("popstate", () => {
  loadComponent();
});
loadComponent();

//render a component
let renderComponent = (componentContainer, newComponent) => {
  if (componentContainer) {
    componentContainer.innerHTML = newComponent;
  }
};



function initView(path) {
  switch (path) {
    case "/clientList":
      import("/controllers/clients/clientList.js").then((mod) => mod.initClientList()).catch((err)=>console.log(err));
      break;
    case "/registClient":
      import("/controllers/clients/register.js").then((mod) => mod.initRegisterClient()).catch((err)=>console.log(err));
      break;
    case "/employeeList":
      import("/controllers/employee/employeeList.js").then((mod) => mod.initEmployeeList()).catch((err)=>console.log(err));
      break;
    case "/controllers/employee/registEmployee":
      import("/employee/registEmployee.js").then((mod) => mod.initRegisterEmployee()).catch((err)=>console.log(err));
      break;
    case "/report":
      import("../reports/report1.js").then((mod) => mod.initReport()).catch((err)=>console.log(err));
      break;
  }

}
export { loadComponent };