// Recoleccion de Datos 
const boton = document.querySelector("#registrar");
boton.addEventListener("click", (event)=>{
    event.preventDefault();
    let tipo = document.getElementById("tipo").value;
    let nombre = document.getElementById("nombre").value;
    let marca = document.getElementById("marca").value;
    let procesador = document.getElementById("procesador").value;
    let memoria = document.getElementById("memoria").value;
    let almacenamiento = document.getElementById("almacenamiento").value;
    let estados = document.getElementById("estados").value;
    let detalles = document.getElementById("detalles").textContent;
    let importar  = document.getElementById("importar").imageContent;

    let equipo = {
        "tipo":tipo,
        "nombre":nombre,
        "marca":marca,
        "problemas":procesador,
        "memoria":memoria,
        "almacenamiento":almacenamiento,
        "estados":estados,
        "detalles":detalles,
    }

    document.getElementById("tipo").value=("");
    document.getElementById("nombre").value=("");
    document.getElementById("marca").value=("");
    document.getElementById("procesador").value=("");
    document.getElementById("memoria").value=("");
    document.getElementById("almacenamiento").value=("");
    document.getElementById("estados").value=("");
    document.getElementById("detalles").textContent=("");
    document.getElementById("importar").imageContent=("");
    
    console.log(equipo)
 });


//Boton Cancelar
document.getElementById('cancelar').addEventListener('click',function(e){
    alert ("Se a cancelado proceso de Registro...");
}); 






















