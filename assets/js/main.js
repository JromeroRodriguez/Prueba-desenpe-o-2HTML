
//FUNCION PARA MOSTRAR Y OCULTAR MENU HAMBURGUESA
function showMenu(){
    var btnMenu = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.nav');

    if(menu.classList.contains('active')){
        btnMenu.innerText = '☰'
    }else{
        btnMenu.innerText = 'X'
    }
    menu.classList.toggle('active');
}

document.querySelector('.menu-toggle').addEventListener('click', showMenu);


