//"use strict"

window.addEventListener("DOMContentLoaded", function(){
    if (localStorage.darkTheme == "true") theme(true);
})

function theme(referred = false){
    let light = document.getElementById("theme");
    console.log(localStorage.darkTheme, typeof localStorage.darkTheme);
    if (localStorage.darkTheme == "false" || referred) {
        localStorage.darkTheme = "true";
        light.setAttribute("href", "./CSS/color_theme_dark.css");
    }
    else {
        localStorage.darkTheme = "false";
        let light = document.getElementById("theme");
        light.removeAttribute("href");
    }
}
//<button type="button" class="navbar" onclick="theme()">Выкл/вкл свет</button>