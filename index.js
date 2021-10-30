const arrow_=document.getElementById('_arrow');
const navUL=document.getElementById('ul');

arrow_.addEventListener('click',()=>{
    navUL.classList.toggle('show');
})