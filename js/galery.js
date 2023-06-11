// --------------------- GALERÍA -------------------------------------------------------------------------
// Obteniendo los valores de la galería para usar el evento click en cada hijo... y obteniendo el btn icon del boxligth
let ligthbox     = document.querySelector('#ligthbox');
const galeryItem = document.querySelectorAll('.card__img');
const icon       = document.querySelector('#icon');
const imgGrand   = document.querySelector('#img');

// declarando las funciones
// funcion que obtiene el valor de cada card
const addImge = (e)=>{
    imgGrand.src = e;
};

// funcion que abre el ligthbox
galeryItem.forEach( (item)=>{
    item.addEventListener('click', ()=>{
        ligthbox.classList.add('ligthbox-active');
        addImge(item.getAttribute('src')); 
    });
});

// función que cierra el ligthbox
const ligthboxClouse = ()=>{
    ligthbox.classList.remove('ligthbox-active');
};


// Invocación de las funciones
icon.addEventListener('click', ligthboxClouse);
