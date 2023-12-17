const open_menu = document.getElementById('open_menu')
const close_menu = document.getElementById('close_menu')
const main_menu = document.getElementById('main_menu')
const search = document.getElementById("search");
const input = document.getElementById("input");

open_menu.addEventListener('click',show);
close_menu.addEventListener('click',close);
search.addEventListener('click',toggle);

function toggle() {
    if (input.style.display == 'none') {
        input.style.display = "block"
    }
    else {
        input.style.display = "none"
    }
    
}


function show () {
 main_menu.style.display = 'flex'
 main_menu.style.top= '0'
}

function close () {  
    
    main_menu.style.display = 'none';
   }



 
    //   function toggleHide() {
        
    //     if (input.style.display !== "none") {
    //       input.style.display = "none";
    //       input.textAlign = "center";
    //     } else {
    //       input.style.display = "block";
    //     }
    //   }
 