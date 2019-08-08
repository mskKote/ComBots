//"use strict"

window.addEventListener("DOMContentLoaded", function(){
    if (localStorage.darkTheme == "true") theme(true);
})

function theme(referred = false){
    console.log(localStorage.darkTheme, typeof localStorage.darkTheme);
    if (localStorage.darkTheme == "false" || referred) {
        localStorage.darkTheme = "true";
        document.getElementById("light")
     .innerHTML = "Включить свет";
        document.getElementById("theme")
    .setAttribute("href", "../CSS/color_theme_dark.css");
    }
    else {
        localStorage.darkTheme = "false";
        document.getElementById("light")
     .innerHTML = "Выключить свет";

        document.getElementById("theme")
     .removeAttribute("href");
    }
}
//<button type="button" class="navbar" onclick="theme()">Выкл/вкл свет</button>