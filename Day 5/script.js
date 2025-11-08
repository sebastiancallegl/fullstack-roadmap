const padre = {};

let [filaInteres, ...filasDatos] = document.querySelectorAll('tr');
filaInteres = filaInteres.querySelectorAll('th');

const [hora, ...elementosDias] = filaInteres;

for(let i = 0; i < elementosDias.length; i++) {
    padre[elementosDias[i].innerHTML] = {};
    for (let j = 0; j < filasDatos.length; j++) {
        const [nombreActividad, listaActividades] = filasDatos[j].querySelectorAll('td')[i].childNodes;
        padre[elementosDias[i].innerHTML][nombreActividad.textContent.trim()] = []
        const actividades = listaActividades.querySelectorAll('li')
        for (let k = 0; k < actividades.length; k++) {
            padre[elementosDias[i].innerHTML][nombreActividad.textContent.trim()].push(actividades[k].innerText);
        }
    }
}

console.log(JSON.stringify(padre))