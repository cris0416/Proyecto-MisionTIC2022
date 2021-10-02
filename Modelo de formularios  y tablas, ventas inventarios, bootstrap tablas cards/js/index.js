//AGREGAR UN LISTENER PARA EL EVENTO CLICK
document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    let url = document.querySelector("#url-txt").value;
    let codigo = document.querySelector("#codigo-txt").value;
    let clase = document.querySelector("#clase-select").value;
    let descripcion = document.querySelector("#descripcion-txt").value;
    console.log(nombre, ",", codigo, ",",clase,",", descripcion, ",", url);
});