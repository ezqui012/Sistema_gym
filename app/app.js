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
  "/registEmployee": "/employee/registEmployee.html",
  "/registClient": "/clients/registClient.html",
  "/employeeList": "/employee/employeeList.html",
  "/clientList": "/clients/clientList.html",
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
      import("/clients/clientList.js").then((mod) => mod.initClientList()).catch((err)=>console.log(err));
      break;
    case "/registClient":
      import("/clients/register.js").then((mod) => mod.initRegisterClient());
      break;
    case "/employeeList":
      import("/employee/employeeList.js").then((mod) => mod.initEmployeeList());
      break;
    case "/registEmployee":
      import("/employee/registEmployee.js").then((mod) => mod.initRegisterEmployee());
      break;
    case "/report":
      import("../reports/report1.js").then((mod) => mod.initReport());
      break;
  }

}
export { loadComponent };