export function sidebar() {
    
    return `
        <div id="sideB"class="sidebar_container">
            <h2 class="sidebar_title" >DETONADOR GYM</h2>
            <button data-route="/app" class="btn"><b>Inicio</b></button>
            <button data-route="/registEmployee" class="btn"><b>Registrar Empleado</b></button>
            <button data-route="/registClient" class="btn"><b>Registrar Cliente</b></button>
            <button data-route="/employeeList" class="btn"><b>Ver Lista Empleados</b></button>
            <button data-route="/clientList" class="btn"><b>Ver Lista Clientes</b></button>
            <button data-route="/report"class="btn"><b>Informes</b></button>
            <button data-route="/login"class="btn" onclick=""><b>Cerrar Sesión</b></button>
        </div>
    `;
    
}
