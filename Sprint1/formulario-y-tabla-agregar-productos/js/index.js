const productos = [];
const clases = ['Frutas', 'Verduras', 'Abarrotes', 'Otros']
const eliminar = async function () {
    const idProducto = this.idProducto;
    const resp = await Swal.fire({
        title: 'Está seguro de borrar el producto?',
        text: "Si se borra no se podrá recuperar!",
        icon: 'alerta',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrar el producto!'
    })
    if (resp.isConfirmed) {
        productos.splice(idProducto, 1);
        cargarTabla();
        Swal.fire("Producto Borrado", "Producto borrado de la tabla", "info");
    }
};
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
        btnEliminar.idProducto = i;
        btnEliminar.addEventListener("click", eliminar);
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
    } else if (productos.find(p => p.nombre.toLowerCase() == nombre.toLowerCase()) != undefined) {
        errores.push("Un producto con el mismo nombre ya ha sido ingresado");
    }
    if (codigo.trim() == "") {
        errores.push("Falta ingresar el código del producto.");
    } else if (productos.find(p => p.codigo.toLowerCase() == codigo.toLowerCase()) != undefined) {
        errores.push("Un producto con el mismo codigo ya ha sido ingresado.");
    }
    if (url.trim() == "") {
        errores.push("Debe ingresar la url de la imagen del producto.");
    } else if (productos.find(p => p.url.toLowerCase() == url.toLowerCase()) != undefined) {
        errores.push("La imagen correspondiente a esa URL ya ha sido utilizada para otro producto");
    }
    if (descripcion.trim() == "") {
        errores.push("Es necesario que ingrese una descripción del producto.")
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
        let mensaje = errores.join("<br />");
        Swal.fire("Errores de validación", mensaje, "warning");

    }

});

document.querySelector("#borrar-btn").addEventListener("click", ()=>{
    document.querySelector("#nombre-txt").value = "";
    document.querySelector("#url-txt").value = "";
    document.querySelector("#codigo-txt").value = "";
    document.querySelector("#clase-select").value = "0";
    document.querySelector("#descripcion-txt").value = "";
})