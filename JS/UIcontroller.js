"use strict"

let state = "ON";

function theme(){
    let light = document.getElementById("theme");
    
    if (state === "ON") {
        state = "OFF";
        light.setAttribute("href", "CSS/color_theme_dark.css");
    }
    else {
        state = "ON";
        let light = document.getElementById("theme");
        light.removeAttribute("href");
    }
}
//<button type="button" class="navbar" onclick="theme()">Выкл/вкл свет</button>