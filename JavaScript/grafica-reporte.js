let grafica;
let ctx;

function toggleGrafica() {
    const graficaSection = document.getElementById('graficaSection');
    const crudContainer = document.querySelector('.crud-container:not(.grafica-section)');
    
    if (graficaSection.classList.contains('show')) {
        graficaSection.classList.remove('show');
        crudContainer.style.display = 'block';
    } else {
        crudContainer.style.display = 'none';
        generarGrafica();
        mostrarPersonasRegistradas();
        graficaSection.classList.add('show');
    }
}

function generarGrafica() {
    ctx = document.getElementById('myChart').getContext('2d');
    let motos = JSON.parse(localStorage.getItem('motocicletas')) || [];
    let nombres = motos.map(p => p.nombre);
    let cantidades = motos.map(p => p.cantidad);

    if (grafica) {
        grafica.destroy();
    }

    grafica = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: nombres,
            datasets: [{
                label: 'Cantidad por Motocicleta',
                data: cantidades,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function mostrarPersonasRegistradas() {
    let usuarios = JSON.parse(localStorage.getItem('users')) || [];
    let tablaUsuarios = document.getElementById('tablaUsuarios');
    
    if (tablaUsuarios) {
        tablaUsuarios.innerHTML = '';
        if (usuarios.length === 0) {
            tablaUsuarios.innerHTML = '<tr><td colspan="2" class="text-center">No hay usuarios registrados</td></tr>';
        } else {
            usuarios.forEach((user, index) => {
                tablaUsuarios.innerHTML += `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${user.username}</td>
                    </tr>
                `;
            });
        }
    }
}

