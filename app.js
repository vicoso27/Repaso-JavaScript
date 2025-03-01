const input = document.getElementById('tarea');
const button = document.getElementById('agregar');
const list = document.getElementById('lista');

button.addEventListener('click', agregar);
list.addEventListener('click', administrarTarea);

function agregar() {
    const texto = input.value.trim();
    if (texto === '') return alert('Debes ingresar una tarea');

    const li = document.createElement('li');
    li.textContent = texto;

    const eliminar = document.createElement('button');
    eliminar.textContent = 'Eliminar';
    eliminar.classList.add('eliminar');

    li.appendChild(eliminar);
    list.appendChild(li);
    input.value = '';
    }

    function administrarTarea(e) {
        if (e.target.tagName === 'BUTTON') {
            e.target.parentElement.remove();
        } else if (e.target.tagName === 'LI') {
            e.target.classList.toggle('completado');
        }
    }
    