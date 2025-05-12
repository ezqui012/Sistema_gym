export function sidebar() {
    
    return `
        <div class="sidebar_container">
            <h2 class="sidebar_title" >DETONADOR GYM</h2>
            <button data-route="home.html" class="btn"><b>Inicio</b></button>
            <button data-route="registEmployee.html" class="btn"><b>Registrar Empleado</b></button>
            <button data-route="registClient.html" class="btn"><b>Registrar Cliente</b></button>
            <button data-route="employee.html" class="btn btn_list_employee"><b>Ver Lista Empleados</b></button>
            <button data-route="clients.html"class="btn"><b>Ver Lista Clientes</b></button>
            <button data-route="report.html"class="btn"><b>Informes</b></button>
            <button data-route="../index.html"class="btn" onclick=""><b>Cerrar Sesión</b></button>
        </div>
    `;
    
    

}
