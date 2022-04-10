document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){
    let currentScroll = document.documentElement.scrollTop;
    if(currentScroll > 0) {
        window.scrollTo (0, 0);
    }
}

buttonUp = document.getElementById("button-up");
window.onscroll = function() {
    let scroll = document.documentElement.scrollTop;
    if(scroll > 300){
        buttonUp.style.transform = "scale(1)";
    } else if (scroll < 300) {
        buttonUp.style.transform = "scale(0)";
    }
}


/*      menu responsive      */

const categorias = document.querySelector('.categorias')
const openMenu = document.querySelector('.open-menu')
const cerrarMenu = document.querySelector('.cerrar-menu')    

openMenu.addEventListener('click', ()=> {
    categorias.classList.toggle('nav-menu-visible')
})

cerrarMenu.addEventListener('click', ()=>{
    categorias.classList.remove('nav-menu-visible')
})




