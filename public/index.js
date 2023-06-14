const burg=document.querySelector('#burger')
const men=document.querySelector('#menu')
burg.addEventListener('click',()=>{
    if(men.classList.contains('hidden')) {men.classList.remove('hidden');}
    else{men.classList.add('hidden');}
})
