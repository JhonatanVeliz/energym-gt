// Valores para las variables
// buttom
const btnSubmit = document.querySelector('#btn-submit');

//form
const form = document.querySelector('#form');

// Alert

let userAlert = document.querySelector('#alert');

// Inputs
const userName = document.querySelector('#name');
const userPhone = document.querySelector('#phone');
const userSelect = document.querySelector('#plan');

// Variable de Regex para validar el número de telefono
const phoneRegex = /(\(?(\+502)\)?)?(\d{8})/;

// Delcaración de funciones

const valido = () => {

    const tel = 50250670910;
    let userN = userName.value;
    let userP = userPhone.value;
    let userS = userSelect.options[userSelect.selectedIndex].text;

    const url = `https://api.whatsapp.com/send?phone=${tel}&text=
        *_${userN} desea inscribirse a ENERGYM_*%0A
        *_Nombre:_*%0A
        ${userN}%0A%0A
        *Celular:*%0A
        ${userP}%0A%0A
        *_PlAN ELEGIDO_:*%0A
        ${userS}%0A`;

    window.open(url);

    setTimeout( ()=> {
        form.reset();
    },1000);
};

const noValido = (campo) => {
    userAlert.innerHTML = `Porfavor verifica tu ${campo}`;
    userAlert.classList.add('resultSee');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });
    setTimeout(()=>{
        userAlert.classList.remove('resultSee');
        userAlert.innerHTML = '';
    }, 3000)
};

// Invocación de las funciones 
// activa la validación del formulario
btnSubmit.addEventListener('click', () => {
    if(userName.value == '' && userPhone.value == ''){
        noValido('formulario');
        return;
    }
    if(userName.value === ''){
        noValido('Nombre');
        return;
    }else if(!phoneRegex.test(userPhone.value)){
        noValido('Teléfono');
        return;
    }
    valido();
});