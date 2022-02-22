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