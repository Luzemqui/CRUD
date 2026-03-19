let personas = [];

if (personas.getElementById("ADMIN")) {
    
    function guardar() {

        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let edad = document.getElementById("edad").value;
        let placa = document.getElementById("placa").value;
        let marca = document.getElementById("marca").value;
        let modelo = document.getElementById("modelo").value;

        if (nombre === "" || apellido === "" || placa === "" || edad === "") {
            alert("Todos los campos son obligatorios");
        } else {

            let persona = {
                nombre: nombre,
                apellido: apellido,
                edad: edad,
                placa: placa,
                marca: marca,
                modelo: modelo,

            };

            personas.push(persona);
            limpiar();
            mostrar();
        }
    }

    // FUNCION MOSTRAR
    function mostrar() {
        let tabla = document.getElementById("tabla");
        tabla.innerHTML = "";

        //METODO LENGHT
        for (let i = 0; i < personas.length; i++) {

            //METODO INNER
            //MENSAJE ALERT PARA PERMITIR ELIMINAR UN DATO
            tabla.innerHTML += `
                <tr>
                    <td>${personas[i].nombre}</td>
                    <td>${personas[i].apellido}</td>
                    <td>${personas[i].edad}</td>
                    <td>${personas[i].placa}</td>
                    <td>${personas[i].marca}</td>
                    <td>${personas[i].modelo}</td>

                    <td>
                        <button class="btn btn-info btn-sm" onclick="editar(${i})">Editar</button>
                        <button class="btn btn-danger btn-sm" onclick="eliminar(${i})">Eliminar</button>
                    </td>
                </tr>
            `;
        }
    }

    // EDITAR
    function editar(i) {
        document.getElementById("nombre").value = personas[i].nombre;
        document.getElementById("apellido").value = personas[i].apellido;
        document.getElementById("edad").value = personas[i].edad;
        document.getElementById("placa").value = personas[i].placa;
        document.getElementById("marca").value = personas[i].marca;
        document.getElementById("modelo").value = personas[i].modelo;
  
        document.getElementById("indice").value = i;
    }

    // ACTUALIZAR
    function actualizar() {

        let i = document.getElementById("indice").value;
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let edad = document.getElementById("edad").value;
        let placa = document.getElementById("placa").value;
        let marca = document.getElementById("marca").value;
        let modelo = document.getElementById("modelo").value;
      

        if (nombre === "" || apellido === "" || edad  === "" || placa === "" || marca === "" || modelo === "") {
            alert("No se pueden dejar campos vacíos");
        } else {

            personas[i].nombre = nombre;
            personas[i].apellido = apellido;
            personas[i].edad = edad;
            personas[i].placa = placa;
            personas[i].marca = marca;
            personas[i].modelo = modelo;

            limpiar();
            mostrar();          
        }
    }

        // ELIMINAR
        function eliminar(i) {

            if (confirm("¿Desea eliminar el registro?")) {
                personas.splice(i, 1);
                mostrar();
            }
        }

    // LIMPIAR
    function limpiar() {
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("edad").value = "";
        document.getElementById("placa").value = "";
        document.getElementById("marca").value = "";
        document.getElementById("modelo").value = "";


        document.getElementById("indice").value = "";
    }
}