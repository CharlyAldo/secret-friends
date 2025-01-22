// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array que almacenará los nombres de los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor ingresado en el campo de texto
    const nombreAmigo = document.getElementById('amigo').value;

    // Validar que el campo no esté vacío
    if (nombreAmigo.trim() === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombreAmigo);

    // Limpiar el campo de texto
    document.getElementById('amigo').value = '';

    // Actualizar la lista visible de amigos
    mostrarListaAmigos();
}

// Función para mostrar la lista de amigos en el HTML
function mostrarListaAmigos() {
    const listaElement = document.getElementById('listaAmigos');
    
    // Limpiar la lista actual
    listaElement.innerHTML = '';

    // Crear elementos de lista para cada amigo
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaElement.appendChild(li);
    });

    // Habilitar el botón de sorteo si hay al menos un amigo en la lista
    const botonSortear = document.querySelector('.button-draw');
    botonSortear.disabled = amigos.length === 0;
}

// Función para sortear un amigo secreto (puedes implementarla más adelante)
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('resultado').innerHTML = `¡El amigo secreto es: ${amigoSorteado}!`;
}

// Función para resetear el sorteo
function resetearSorteo() {
    // Limpiar el array de amigos
    amigos = [];

    // Limpiar la lista visible de amigos
    mostrarListaAmigos();

    // Limpiar el resultado del sorteo
    document.getElementById('resultado').innerHTML = '';

    // Habilitar el botón "Adicionar" para que se pueda agregar nuevos amigos
    document.getElementById('amigo').value = '';

    // Deshabilitar el botón de sorteo si no hay amigos en la lista
    const botonSortear = document.querySelector('.button-draw');
    botonSortear.disabled = true;
}