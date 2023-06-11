// Funcion que trae la URL, verifica sus parametros y luego los inserta al Selected del HTML
const url = window.location.href;
const params = new URLSearchParams(url.split('?')[1]);

// valores de los option del html
const options = document.querySelectorAll('.option');
const inputName = document.querySelector('#name');

// valore del select que se le debe colocar al valor del option indicado por el usuario
let selectValue = null;

params.forEach((clave)=>{
    selectValue = clave;
});

options.forEach(option => {
    if(option.value === selectValue){
        option.selected = true;
        inputName.focus();
    }
});