const productos = [];
const clases = ['Frutas', 'Verduras', 'Abarrotes', 'Otros']
const selectClases = document.querySelector("#clase-select");
for (let i = 0; i < clases.length; ++i) {
    let option = document.createElement("option");
    option.value = i;
    option.innerText = clases[i];
    selectClases.appendChild(option);
}
const cargarTabla = () => {
    const tbody = document.querySelector("#tabla-tbody");
    tbody.innerHTML = "";
    for (let i = 0; i < productos.length; ++i) {
        let p = productos[i];
        let fila = document.createElement("tr");
        let celdaNombre = document.createElement("td");
        celdaNombre.innerText = p.nombre;
        let celdaUrl = document.createElement("td");
        celdaUrl.classList.add("text-center");
        let imgProducto = document.createElement("img");
        imgProducto.src = p.url;
        imgProducto.classList.add("img-fluid");
        celdaUrl.appendChild(imgProducto);
        let celdaCodigo = document.createElement("td");
        celdaCodigo.innerText = p.codigo;
        let celdaClase = document.createElement("td");
        celdaClase.innerText = clases[p.clase];
        let celdaDescripcion = document.createElement("td");
        celdaDescripcion.innerText = p.descripcion;
        let celdaAcciones = document.createElement("td");
        celdaAcciones.classList.add("text-center");
        let btnEliminar = document.createElement("button");
        btnEliminar.classList.add("btn", "btn-danger");
        btnEliminar.innerText = "Eliminar";
        celdaAcciones.appendChild(btnEliminar);

        fila.appendChild(celdaNombre);
        fila.appendChild(celdaCodigo);
        fila.appendChild(celdaClase);
        fila.appendChild(celdaDescripcion);
        fila.appendChild(celdaUrl);
        fila.appendChild(celdaAcciones);
        tbody.appendChild(fila);
    }
}
//AGREGAR UN LISTENER PARA EL EVENTO CLICK
document.querySelector("#registrar-btn").addEventListener("click", () => {
    let nombre = document.querySelector("#nombre-txt").value;
    let url = document.querySelector("#url-txt").value;
    let codigo = document.querySelector("#codigo-txt").value;
    let clase = document.querySelector("#clase-select").value;
    let descripcion = document.querySelector("#descripcion-txt").value;
    let errores = [];
    if (nombre.trim() == "") {
        errores.push("Debe ingresar el nombre de un artículo");
    }
    if (url.trim() == "") {
        errores.push("Debe ingresar una url");
    }
    if (errores.length == 0) {
        let producto = {};
        producto.nombre = nombre;
        producto.url = url;
        producto.codigo = codigo;
        producto.clase = clase;
        producto.descripcion = descripcion;
        productos.push(producto);
        cargarTabla();
    } else {
        let mensaje = errores.join("\n");
        Swal.fire("Errores de validación", mensaje, "error");

    }

});