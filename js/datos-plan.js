// Links 
const links = document.querySelectorAll('.plan-link');
const planName = document.querySelectorAll('.card__subtitle');

links.forEach((link, index)=>{
    link.addEventListener('click', ()=>{
        const parament = planName[index].textContent;
        const paramentsUrl = encodeURIComponent(parament);
        const url = './registro.html?parametro=' + paramentsUrl;
        window.open(url ,'_blank');
    })
})