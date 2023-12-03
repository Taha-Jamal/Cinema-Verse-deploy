const open_menu = document.getElementById('open_menu')
const close_menu = document.getElementById('close_menu')
const main_menu = document.getElementById('main_menu')

open_menu.addEventListener('click',show);
close_menu.addEventListener('click',close);


function show () {
 main_menu.style.display = 'flex'
 main_menu.style.top= '0'
}

function close () {  
    
    main_menu.style.display = 'none';
   }