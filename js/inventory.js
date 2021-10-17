// Se definen las variables globales

const searchBtn = document.querySelector('.main-content__search button');
const sidebarBtn = document.querySelector('.sidebar__button');
const mainGrid = document.querySelector('.main-grid');
const panelNoti = document.querySelector('.panel-noti');
const eventBtn = document.querySelector('#new-event button');
let search;

// Boton de busqueda el cual se abre al hacer click y toma el valor para hacer una "busqueda" o no... >:D

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector("#in-search").classList.remove('hidden');
    document.querySelector("#btn-search").classList.remove('search-close');
    document.querySelector("#in-search").focus();
    if (document.querySelector("#in-search").value != '') {
        search = document.querySelector("#in-search").value;
        document.querySelector("#in-search").value = '';
        document.querySelector('.main__display').innerHTML = `
        <div class="alert alert-warning rounded" role="alert">
            No se encontro nada llamado "<strong>${search}</strong>" :(
        </div>
        <a href="./inventory.html" class="btn text-white mx-auto fw-bold"
         style="background-color: var(--secundary-blue);
         display: block; width: 40%;">Volver</a>
        `
    }
});

// Boton del sidebar izquierdo (Panel) para minimizarlo

sidebarBtn.addEventListener('click', function () {
    document.querySelectorAll('.sm').forEach((elem) => elem.classList.toggle('hidden'));
    document.querySelector('.sidebar').classList.toggle('sidebar-toggle');
});

// Boton de programar evento en el calendario

eventBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let date = document.querySelector('#date-event').value;
    let info = document.querySelector('#info-event').value;
    document.querySelector('#date-event').value = '';
    document.querySelector('#info-event').value = '';
});

// Listado de equipos de prueba

let devices = [{
        tipo: "Escritorio",
        nombre: "Sistemas"
    },
    {
        tipo: "Portatil",
        nombre: "Contabilidad"
    },
    {
        tipo: "Portatil",
        nombre: "Gerencia"
    },
    {
        tipo: "Movil",
        nombre: "Cel-RRHH"
    }
];

// Genera un formato e inserta el equipo con su icono correspondiente en el display principal

const getItems = () => {
    mainGrid.innerHTML = '';
    devices.forEach((elem) => {
        let count = 0; count++
        let icon;
        if (elem.tipo.toLowerCase() == 'escritorio')
            icon = `<i class="fas fa-desktop"></i>`
        else if (elem.tipo.toLowerCase() == 'portatil')
            icon = `<i class="fas fa-laptop"></i>`
        else if (elem.tipo.toLowerCase() == 'movil')
            icon = `<i class="fas fa-mobile-alt"></i>`
        else icon = `<i class="fas fa-question"></i>`
        mainGrid.innerHTML +=
            `<div class="item" id="item-${count}">
            ${icon}
            <strong>${elem.nombre}</strong>
            </div>`
    })
};

// Listado de notificaciones de prueba

let noti = [{
        tipo: "ingreso",
        user: "usuario",
        data: "127.0.0.1"
    },
    {
        tipo: "cambio",
        user: "admin",
        data: "Sistemas"
    },
    {
        tipo: "ingreso",
        user: "admin",
        data: "192.168.0.10"
    },
    {
        tipo: "evento",
        user: "usuario",
        data: "20/10/2021"
    }

];

// Cargar el listado de notificaciones obtenidas del servidor (MAX 3)

const getNoti = () => {
    panelNoti.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        let elem = noti[i];
        let info;
        if (elem.tipo.toLowerCase() == 'ingreso')
            info = 'ha ingresado al sistema desde la IP:'
        else if (elem.tipo.toLowerCase() == 'cambio')
            info = 'ha modificado el dispositivo'
        else if (elem.tipo.toLowerCase() == 'evento')
            info = 'ha programado un evento el dia'
        else panelNoti.innerHTML += '';
        panelNoti.innerHTML += `
        <div class="card-noti">
        <strong>${elem.tipo.toUpperCase()}:</strong>
        El usuario <strong>${elem.user}</strong> ${info} 
        <strong>${elem.data}</strong></div>`
    }
}


// Carga de componentes iniciales

window.onload = () => {
    getItems(); // Cargar equipos en la pagina principal de inventario
    getNoti(); // Cargar notificaciones del panel derecho
}