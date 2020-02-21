let openBtn = document.getElementById("open"),
    closeBtn = document.getElementById("close"),
    menu = document.getElementById("menu"),
    contMenu = document.getElementById("cont-menu"),
    contMenu2 = document.getElementById("cont-menu-2");


openBtn.addEventListener("click", (e) => {
    menu.style.width = "180px";
    openBtn.style.visibility = 'collapse';

    setTimeout(showThings, 850)
    e.preventDefault
});


closeBtn.addEventListener("click", (e) => {

    contMenu.style.visibility = 'collapse';
    contMenu.style.display = 'none'
    menu.style.width = "0px";
    
    setTimeout(showBtn, 1000)
    e.preventDefault
});


showThings =()=>{
    contMenu.style.visibility = 'visible';
    contMenu.style.display = 'block';
}

showBtn=()=>{
    openBtn.style.visibility = 'visible';
}