const productos = [];
const clases = ['Frutas', 'Verduras', 'Abarrotes', 'Otros']
const selectClases = document.querySelector("#clase-select");
for(let i=0; i < clases.length; ++i) {
    let option = document.createElement("option");
    option.value = i;
    option.innerText = clases[i];
    selectClases.appendChild(option);
}
const cargarTabla = ()=>{
    const tbody = document.querySelector("#tabla-tbody");
    tbody.innerHTML = "";
    for(let i=0; i < productos.length; ++i) {
        let p = productos[i];
        let fila = document.createElement("tr");
        let celdaNombre = document.createElement("td");
        celdaNombre.innerText = p.nombre;
        let celdaUrl = document.createElement("td");
        celdaUrl.innerText = p.url;
        let celdaCodigo = document.createElement("td");
        celdaCodigo.innerText = p.codigo;
        let celdaClase = document.createElement("td");
        celdaClase.innerText = clases[p.clase];
        let celdaDescripcion = document.createElement("td");
        celdaDescripcion.innerText = p.descripcion;
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaCodigo);
        fila.appendChild(celdaClase);
        fila.appendChild(celdaDescripcion);
        fila.appendChild(celdaUrl);
        tbody.appendChild(fila);
    }
}
//AGREGAR UN LISTENER PARA EL EVENTO CLICK
document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    let url = document.querySelector("#url-txt").value;
    let codigo = document.querySelector("#codigo-txt").value;
    let clase = document.querySelector("#clase-select").value;
    let descripcion = document.querySelector("#descripcion-txt").value;
    
    let producto = {};
    producto.nombre = nombre;
    producto.url = url;
    producto.codigo = codigo;
    producto.clase = clase;
    producto.descripcion = descripcion;
    productos.push(producto);
    cargarTabla();
});